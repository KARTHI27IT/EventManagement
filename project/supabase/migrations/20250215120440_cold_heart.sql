/*
  # Initial Schema Setup for Event Management System

  1. New Tables
    - users
      - id (uuid, primary key)
      - email (text, unique)
      - role (text)
      - name (text)
      - department (text, nullable)
      
    - events
      - id (uuid, primary key)
      - title (text)
      - description (text)
      - venue (text)
      - start_time (timestamptz)
      - end_time (timestamptz)
      - chief_guest (text)
      - terms_conditions (text)
      - created_by (uuid, references users)
      - budget_status (text)
      - created_at (timestamptz)
      
    - participants
      - id (uuid, primary key)
      - event_id (uuid, references events)
      - user_id (uuid, references users)
      - registration_time (timestamptz)
      - feedback (text)
      
    - tasks
      - id (uuid, primary key)
      - event_id (uuid, references events)
      - title (text)
      - description (text)
      - assigned_to (uuid, references users)
      - status (text)
      - created_at (timestamptz)
      
    - od_requests
      - id (uuid, primary key)
      - event_id (uuid, references events)
      - user_id (uuid, references users)
      - start_time (timestamptz)
      - end_time (timestamptz)
      - status (text)
      - approved_by (uuid, references users)
      
    - budget_requests
      - id (uuid, primary key)
      - event_id (uuid, references events)
      - amount (numeric)
      - description (text)
      - status (text)
      - requested_by (uuid, references users)
      - approved_by (uuid, references users)
      
  2. Security
    - Enable RLS on all tables
    - Add appropriate policies for each user role
*/

-- Users table
CREATE TABLE users (
  id uuid PRIMARY KEY DEFAULT auth.uid(),
  email text UNIQUE NOT NULL,
  role text NOT NULL CHECK (role IN ('faculty_head', 'student_head', 'volunteer', 'participant')),
  name text NOT NULL,
  department text,
  created_at timestamptz DEFAULT now()
);

-- Events table
CREATE TABLE events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  venue text NOT NULL,
  start_time timestamptz NOT NULL,
  end_time timestamptz NOT NULL,
  chief_guest text,
  terms_conditions text,
  created_by uuid REFERENCES users NOT NULL,
  budget_status text DEFAULT 'pending' CHECK (budget_status IN ('pending', 'approved', 'rejected')),
  created_at timestamptz DEFAULT now()
);

-- Participants table
CREATE TABLE participants (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id uuid REFERENCES events NOT NULL,
  user_id uuid REFERENCES users NOT NULL,
  registration_time timestamptz DEFAULT now(),
  feedback text,
  UNIQUE(event_id, user_id)
);

-- Tasks table
CREATE TABLE tasks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id uuid REFERENCES events NOT NULL,
  title text NOT NULL,
  description text NOT NULL,
  assigned_to uuid REFERENCES users,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'in_progress', 'completed')),
  created_at timestamptz DEFAULT now()
);

-- OD Requests table
CREATE TABLE od_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id uuid REFERENCES events NOT NULL,
  user_id uuid REFERENCES users NOT NULL,
  start_time timestamptz NOT NULL,
  end_time timestamptz NOT NULL,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  approved_by uuid REFERENCES users,
  created_at timestamptz DEFAULT now()
);

-- Budget Requests table
CREATE TABLE budget_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id uuid REFERENCES events NOT NULL,
  amount numeric NOT NULL,
  description text NOT NULL,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  requested_by uuid REFERENCES users NOT NULL,
  approved_by uuid REFERENCES users,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE participants ENABLE ROW LEVEL SECURITY;
ALTER TABLE tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE od_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE budget_requests ENABLE ROW LEVEL SECURITY;

-- Policies for users table
CREATE POLICY "Users can read their own data" ON users
  FOR SELECT TO authenticated
  USING (auth.uid() = id);

-- Policies for events table
CREATE POLICY "Anyone can read events" ON events
  FOR SELECT TO authenticated
  USING (true);

CREATE POLICY "Faculty and student heads can create events" ON events
  FOR INSERT TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() 
      AND role IN ('faculty_head', 'student_head')
    )
  );

-- Policies for participants table
CREATE POLICY "Users can read participant data" ON participants
  FOR SELECT TO authenticated
  USING (true);

CREATE POLICY "Users can register as participants" ON participants
  FOR INSERT TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() 
      AND role = 'participant'
    )
  );

-- Policies for tasks table
CREATE POLICY "Users can read tasks" ON tasks
  FOR SELECT TO authenticated
  USING (true);

CREATE POLICY "Faculty and student heads can create tasks" ON tasks
  FOR INSERT TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() 
      AND role IN ('faculty_head', 'student_head')
    )
  );

-- Policies for od_requests table
CREATE POLICY "Users can read their own OD requests" ON od_requests
  FOR SELECT TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Faculty heads can read all OD requests" ON od_requests
  FOR SELECT TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() 
      AND role = 'faculty_head'
    )
  );

-- Policies for budget_requests table
CREATE POLICY "Users can read budget requests they created" ON budget_requests
  FOR SELECT TO authenticated
  USING (requested_by = auth.uid());

CREATE POLICY "Faculty heads can read all budget requests" ON budget_requests
  FOR SELECT TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() 
      AND role = 'faculty_head'
    )
  );
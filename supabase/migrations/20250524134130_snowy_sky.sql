/*
  # Initial schema setup for portfolio admin

  1. New Tables
    - `about_content`
      - `id` (uuid, primary key)
      - `content` (text)
      - `updated_at` (timestamp)
    - `skills`
      - `id` (uuid, primary key)
      - `name` (text)
      - `icon` (text)
      - `order` (integer)
    - `projects`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `image` (text)
      - `github` (text, nullable)
      - `figma` (text, nullable)
      - `category` (text)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated admin access
*/

-- About Content Table
CREATE TABLE IF NOT EXISTS about_content (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  content text NOT NULL,
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE about_content ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Only authenticated users can read about content"
  ON about_content
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Only authenticated users can update about content"
  ON about_content
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Skills Table
CREATE TABLE IF NOT EXISTS skills (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  icon text NOT NULL,
  "order" integer NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE skills ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Only authenticated users can manage skills"
  ON skills
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Projects Table
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  image text NOT NULL,
  github text,
  figma text,
  category text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Only authenticated users can manage projects"
  ON projects
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Insert initial about content
INSERT INTO about_content (content) VALUES (
  'I''m a 6th-semester Information Systems student at Universitas Ciputra. I''m passionate about programming and continuously seek to grow and learn new things. I love building impactful tech solutions.'
) ON CONFLICT DO NOTHING;
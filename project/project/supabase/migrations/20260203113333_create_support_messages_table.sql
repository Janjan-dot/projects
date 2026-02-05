/*
  # Create support messages table

  1. New Tables
    - `support_messages`
      - `id` (uuid, primary key)
      - `name` (text, required) - Nome do cliente
      - `email` (text, required) - Email do cliente
      - `phone` (text) - Telefone do cliente
      - `message` (text, required) - Mensagem de suporte
      - `created_at` (timestamp) - Data de criação
      - `read` (boolean) - Indica se a mensagem foi lida

  2. Security
    - Enable RLS on `support_messages` table
    - Add policy for anonymous users to insert messages
    - Add policy for reading own messages (via email)
*/

CREATE TABLE IF NOT EXISTS support_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  read boolean DEFAULT false
);

ALTER TABLE support_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anyone to insert support messages"
  ON support_messages FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Allow users to view their own messages"
  ON support_messages FOR SELECT
  TO authenticated
  USING (email = auth.jwt() ->> 'email');

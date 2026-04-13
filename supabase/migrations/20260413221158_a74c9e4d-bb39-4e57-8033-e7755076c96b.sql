CREATE TABLE public.wizard_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  industry text NOT NULL,
  tasks text[] NOT NULL DEFAULT '{}',
  tools text[] NOT NULL DEFAULT '{}',
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

ALTER TABLE public.wizard_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert wizard submissions"
  ON public.wizard_submissions
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Service role can read wizard submissions"
  ON public.wizard_submissions
  FOR SELECT
  TO public
  USING (false);
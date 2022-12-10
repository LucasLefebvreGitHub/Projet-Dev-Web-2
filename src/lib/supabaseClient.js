import { createClient } from '@supabase/auth-helpers-sveltekit';

export const supabase = createClient(
	'https://rgfemnhyuwkjjkurimcx.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJnZmVtbmh5dXdramprdXJpbWN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzAxNzQ4MzcsImV4cCI6MTk4NTc1MDgzN30.Mv3iduD01SxmxVSqgM0N5P37YU4tO5IbZm88GGZXoNA'
);

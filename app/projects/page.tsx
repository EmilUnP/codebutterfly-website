
import { redirect } from 'next/navigation';

export default function ProjectsRedirect() {
  // Server-side redirect to English portfolio page
  redirect('/en/projects');
}

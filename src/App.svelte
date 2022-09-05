<script>
  import { Router } from '@roxi/routify';
  import { routes } from '../.routify/routes';

  import Layout from "@/layouts/DefaultLayout.svelte";
</script>

<Layout>
  <Router {routes} />
</Layout>
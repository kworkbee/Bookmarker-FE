<script>
    import GNB from "@/components/Navbar/GNB.svelte";
    import Aside from "@/components/Sidebar/Aside.svelte";
    import Footer from "@/components/Footer/Footer.svelte";
</script>

<div>
    <GNB />
    <Aside />
    <main class="relative main py-6 ml-80">
        <slot />
        <Footer />
    </main>
</div>
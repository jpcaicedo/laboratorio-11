document.addEventListener('DOMContentLoaded', async () => {
    const agents = await getAgents();
    renderAgents(agents);
    setupSearch(agents);
});

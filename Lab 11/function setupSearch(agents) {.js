function setupSearch(agents) {
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredAgents = agents.filter(agent => 
            agent.nombre.toLowerCase().includes(searchTerm)
        );
        renderAgents(filteredAgents);
    });
}

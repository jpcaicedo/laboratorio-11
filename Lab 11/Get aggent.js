async function getAgents() {
    try {
        const response = await fetch('https://valorant-api.com/v1/agents');
        const data = await response.json();
        return data.data.map(agent => new Agente(
            agent.displayName,
            agent.role ? agent.role.displayName : 'Sin rol',
            agent.abilities.map(ability => ability.displayName),
            agent.displayIcon
        ));
    } catch (error) {
        console.error("Error al obtener agentes:", error);
    }
}

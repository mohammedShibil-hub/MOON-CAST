export const avatorColor = (name) => {
        const colors = [
            '#ff8974', 
            '#65dd65', 
            '#60afff', 
            '#ce5bff', 
            '#ffb75e'
        ];
        const index = name.charCodeAt(0) % colors.length;
        return colors[index];
    };
export const avatorColor = (name) => {
        const colors = [
            '#ff8974', 
            '#65dd65', 
            '#60afff',
            '#F44336',
            '#E91E63',
            '#9C27B0',
            '#673AB7',
            '#3F51B5',
            '#2196F3',
            '#009688',
            '#4CAF50',
            '#FF9800',
            '#795548',
            '#ce5bff', 
            '#ffb75e'
        ];
        const index = name.charCodeAt(0) % colors.length;
        return colors[index];
    };
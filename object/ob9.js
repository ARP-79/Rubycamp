function createDataStore() {
    const data = [];

    return {
        insert: function(obj) {
            data.push(obj);
        },

        find: function(query) {
            return data.filter(item => {
                for (let key in query) {
                    if (item[key] !== query[key]) {
                        return false;
                    }
                }
                return true;
            });
        },

        update: function(id, updateData) {
            const item = data.find(item => item.id == id);
            if (item) {
               
                Object.assign(item, updateData);
                return { success: true };
            }
            return { success: false };
        },

        getStats: function() {
            const stats = {};
            
            data.forEach(item => {
                const dept = item.department;
                if (!stats[dept]) {
                    stats[dept] = { count: 0, totalSalary: 0, avgSalary: 0 };
                }
                stats[dept].count += 1;
                stats[dept].totalSalary += item.salary;
                stats[dept].avgSalary = stats[dept].totalSalary / stats[dept].count;
            });

            return stats;
        }
    };
}
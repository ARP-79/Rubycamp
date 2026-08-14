function createDataStore() {
  const records = [];

  return {

    insert(obj) {
      records.push(obj);
    },

    find(criteria) {
      return records.filter(record => {
        return Object.keys(criteria).every(key => record[key] === criteria[key]);
      });
    },

    update(id, updatedData) {
      const record = records.find(r => r.id === id);
      if (record) {
        Object.assign(record, updatedData);
        return {
          success: true,
          updated: record
        };
      }
      return { success: false, message: "Record tidak ditemukan" };
    },

    getStats() {
      const totalRecords = records.length;
      if (totalRecords === 0) {
        return { totalRecords: 0, departments: [], averageSalary: 0, salaryRange: { min: 0, max: 0 } };
      }

      const deptSet = new Set(records.map(r => r.department).filter(Boolean));
      const departments = Array.from(deptSet);

      let totalSalary = 0;
      let minSalary = Infinity;
      let maxSalary = -Infinity;

      records.forEach(r => {
        if (typeof r.salary === 'number') {
          totalSalary += r.salary;
          if (r.salary < minSalary) minSalary = r.salary;
          if (r.salary > maxSalary) maxSalary = r.salary;
        }
      });

      const averageSalary = totalSalary / totalRecords;

      return {
        totalRecords,
        departments,
        averageSalary,
        salaryRange: {
          min: minSalary === Infinity ? 0 : minSalary,
          max: maxSalary === -Infinity ? 0 : maxSalary
        }
      };
    }
  };
}

let store = createDataStore();
store.insert({ id: 1, name: "Alice", department: "IT", salary: 5000 });
store.insert({ id: 2, name: "Bob", department: "HR", salary: 4500 });
store.insert({ id: 3, name: "Charlie", department: "IT", salary: 5500 });

console.log(store.find({ department: "IT" }));
console.log(store.update(2, { salary: 4800 }));
console.log(store.getStats());
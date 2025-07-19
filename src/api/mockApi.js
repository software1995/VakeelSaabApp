import lawyersData from '../data/lawyers.json';

export const fetchLawyers = () => {
  console.log('fetchLawyers called');
  console.log('Lawyers data loaded:', lawyersData ? lawyersData.length : 'No data');
  
  return new Promise((resolve) => {
    // Simulate API delay
    setTimeout(() => {
      resolve(lawyersData);
    }, 1000);
  });
};

export const fetchLawyerById = (id) => {
  console.log('fetchLawyerById called with id:', id);
  console.log('ID type:', typeof id);
  
  return new Promise((resolve) => {
    // Simulate API delay
    setTimeout(() => {
      // Convert id to number if it's a string
      const numericId = typeof id === 'string' ? parseInt(id, 10) : id;
      console.log('Looking for lawyer with id:', numericId);
      
      const lawyer = lawyersData.find(lawyer => lawyer.id === numericId);
      console.log('Lawyer found:', lawyer ? 'Yes' : 'No');
      
      if (!lawyer) {
        // Debug: log all available lawyer IDs
        console.log('Available lawyer IDs:', lawyersData.map(l => l.id));
      }
      
      resolve(lawyer);
    }, 500);
  });
};
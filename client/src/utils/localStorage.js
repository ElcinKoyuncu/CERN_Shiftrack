export const getSavedUserIds = () => {
    const savedUserIds = localStorage.getItem('saved_userss')
      ? JSON.parse(localStorage.getItem('saved_users'))
      : [];
  
    return savedUserIds;
  };
  
  export const saveUserIds = (userIdArr) => {
    if (userIdArr.length) {
      localStorage.setItem('saved_users', JSON.stringify(userIdArr));
    } else {
      localStorage.removeItem('saved_users');
    }
  };
  
  export const removeUserId = (userId) => {
    const savedUserIds = localStorage.getItem('saved_users')
      ? JSON.parse(localStorage.getItem('saved_users'))
      : null;
  
    if (!savedUserIds) {
      return false;
    }
  
    const updatedSavedUserIds = savedUserIds?.filter((savedUserId) => savedUserId !== userId);
    localStorage.setItem('saved_users', JSON.stringify(updatedSavedUserIds));
  
    return true;
  };
  
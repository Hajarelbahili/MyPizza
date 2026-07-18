export const formatPrice = (price) => new Intl.NumberFormat('en-US', { style:'currency', currency:'USD' }).format(price);
export const formatDate = (date) => new Date(date).toLocaleString('en-US', { dateStyle:'medium', timeStyle:'short' });

exports.handler = (event,context,callback) => {
    const type = event.type;
    if(type === 'all') {
        callback(null, 'All the data');
    } else if (type==='single') {
        callback(null, 'Just a  data');
    } else {
        callback(null, 'hello a lambda');
    }
};    
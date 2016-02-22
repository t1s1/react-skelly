var React = require("react");
var ListItem = require("./ListItem.jsx");

var items = [{"id":1,"textProp":"first"},{"id":2,"textProp":"second"},{"id":3,"textProp":"third"},]

var List = React.createClass({
    
    render: function() {
        var listItems = items.map(function(item) {
            return <ListItem key={item.id} text={item.textProp} />;
         }); 
         
        return (<ul>{listItems}</ul>);
    }
});

module.exports = List;
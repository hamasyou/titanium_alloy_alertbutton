function Controller() {
    function doDispose() {
        alert("dispose!");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.addTopLevelView($.__views.index);
    $.__views.__alloyId1 = Alloy.createWidget("jp.co.mountposition.alertbutton", "widget", {
        title: "Delete",
        id: "__alloyId1"
    });
    $.__views.__alloyId1.setParent($.__views.index);
    doDispose ? $.__views.__alloyId1.on("dispose", doDispose) : __defers["$.__views.__alloyId1!dispose!doDispose"] = !0;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.__alloyId1!dispose!doDispose"] && $.__views.__alloyId1.on("dispose", doDispose);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;
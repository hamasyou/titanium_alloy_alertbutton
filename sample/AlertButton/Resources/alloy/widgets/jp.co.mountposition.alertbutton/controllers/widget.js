function WPATH(s) {
    var index = s.lastIndexOf("/"), path = index === -1 ? "jp.co.mountposition.alertbutton/" + s : s.substring(0, index) + "/jp.co.mountposition.alertbutton/" + s.substring(index + 1);
    return path;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.alertButton = Ti.UI.createButton({
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        backgroundColor: "transparent",
        backgroundImage: WPATH("/images/btn-alert.png"),
        borderWidth: "0",
        color: "#FFFFFF",
        width: "292dp",
        height: "45dp",
        id: "alertButton"
    });
    $.addTopLevelView($.__views.alertButton);
    alert ? $.__views.alertButton.addEventListener("click", alert) : __defers["$.__views.alertButton!click!alert"] = !0;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var alert, args;
    args = arguments[0] || {};
    $.alertButton.title = args.title;
    alert = function() {
        var dialog;
        dialog = Ti.UI.createOptionDialog({
            options: [ args.title, L("cancel") ],
            destructive: 0,
            cancel: 1
        });
        dialog.addEventListener("click", function(e) {
            if (e.index === 0) return $.trigger("dispose");
        });
        return dialog.show();
    };
    __defers["$.__views.alertButton!click!alert"] && $.__views.alertButton.addEventListener("click", alert);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;
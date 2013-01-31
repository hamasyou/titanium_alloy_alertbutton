var alert, args;

args = arguments[0] || {};

$.alertButton.title = args.title;

alert = function() {
  var dialog;
  dialog = Ti.UI.createOptionDialog({
    options: [args.title, L('cancel')],
    destructive: 0,
    cancel: 1
  });
  dialog.addEventListener('click', function(e) {
    if (e.index === 0) {
      return $.trigger('dispose');
    }
  });
  return dialog.show();
};

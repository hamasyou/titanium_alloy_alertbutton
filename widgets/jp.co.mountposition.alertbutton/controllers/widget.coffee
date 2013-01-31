args = arguments[0] or {}
$.alertButton.title = args.title

alert = ->
    dialog = Ti.UI.createOptionDialog({
        options: [args.title, L('cancel')]
        destructive: 0
        cancel: 1
    })
    dialog.addEventListener 'click', (e) ->
        $.trigger 'dispose' if e.index is 0

    dialog.show()

/*
    description: user interface templates
    author: Ahmetcan Ozturk
    version history:
            0.1 initial 2018-10-28
            1.0 release 2018-11-03
            1.0.1 update 2018-11-08
*/

module.exports = {
    pwdItemTemplate : `
    <div id="%ITEMID%" class="row pwditem">
        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <input id="%HDNKEYID%" type="hidden" value="%HDNKEY%" />
            <input id="%KEYID%" type="text" class="form-control form-control-sm text-input key" placeholder="key" value="%KEY%" />
        </div>
        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <input id="%VALUEID%" type="password" class="form-control form-control-sm text-input value" value="%VALUE%" />
        </div>
        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <button id="%GENBTNID%" type="button" class="btn btn-sm btn-info generate" title="generate secure random password"><i class="fas fa-random fa-lg"></i></button>
            <button id="%SAVEBTNID%" type="button" class="btn btn-sm btn-success save" title="save item"><i class="far fa-save fa-lg"></i></button>
            <button id="%DELBTNID%" type="button" class="btn btn-sm btn-danger delete" title="remove item"><i class="fas fa-minus-circle fa-lg"></i></button>
        </div>
    </div>`
};


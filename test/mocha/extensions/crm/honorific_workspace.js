/*jshint trailing:true, white:true, indent:2, strict:true, curly:true,
  immed:true, eqeqeq:true, forin:true, latedef:true,
  newcap:true, noarg:true, undef:true */
/*global XT:true, XM:true, XV:true, describe:true, it:true,
  before:true, module:true, require:true */

(function () {
  "use strict";

  var _ = require("underscore"),
    zombieAuth = require("../../lib/zombie_auth"),
    modelData = require("../../lib/model_data"),
    smoke = require("../../lib/smoke"),
    assert = require("chai").assert;

  describe('Honorific Workspace', function () {

    before(function (done) {
      this.timeout(30 * 1000);
      zombieAuth.loadApp(done);
    });

    describe('User selects to create an honorific', function () {
      it('User navigates to Honorific-New and selects to create a new Honorific', function (done) {
        this.timeout(30 * 1000);
        smoke.navigateToNewWorkspace(XT.app, "XV.HonorificList", function (workspaceContainer) {
          var workspace = workspaceContainer.$.workspace;

          assert.equal(workspace.value.recordType, "XM.Honorific");
          smoke.setWorkspaceAttributes(workspace, modelData.honorific);
          smoke.saveWorkspace(workspace, function () {
            smoke.deleteFromList(XT.app, workspace.value, done);
          });
        });
      });
    });
  });
}());

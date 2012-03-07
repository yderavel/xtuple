// ==========================================================================
// Project:   xTuple Postbooks - Business Management System Framework        
// Copyright: ©2012 OpenMFG LLC, d/b/a xTuple                             
// ==========================================================================

/*globals XM */

/**
  @class

  This code is automatically generated and will be over-written. Do not edit directly.

  @extends XM.Record
*/
XM._GeneralJournal = XM.Record.extend(
  /** @scope XM._GeneralJournal.prototype */ {
  
  className: 'XM.GeneralJournal',

  nestedRecordNamespace: XM,

  // .................................................
  // PRIVILEGES
  //

  privileges: {
    "all": {
      "create": false,
      "read": "ViewJournals",
      "update": false,
      "delete": false
    }
  },

  //..................................................
  // ATTRIBUTES
  //
  
  /**
    @type Number
  */
  guid: SC.Record.attr(Number),

  /**
    @type Date
  */
  date: SC.Record.attr(Date),

  /**
    @type Number
  */
  series: SC.Record.attr(Number),

  /**
    @type String
  */
  documentType: SC.Record.attr(String),

  /**
    @type String
  */
  documentNumber: SC.Record.attr(String),

  /**
    @type String
  */
  notes: SC.Record.attr(String),

  /**
    @type XM.LedgerAccountInfo
  */
  ledgerAccount: SC.Record.toOne('XM.LedgerAccountInfo', {
    isNested: true
  }),

  /**
    @type String
  */
  sense: SC.Record.attr(String),

  /**
    @type Number
  */
  amount: SC.Record.attr(Number),

  /**
    @type Boolean
  */
  journal: SC.Record.attr(Boolean),

  /**
    @type String
  */
  created: SC.Record.attr(String),

  /**
    @type String
  */
  createdBy: SC.Record.attr(String)

});

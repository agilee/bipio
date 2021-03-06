var defs = {

    CONTENTTYPE_RSS             : 'application/rss+xml',
    CONTENTTYPE_XML             : 'text/xml',
    CONTENTTYPE_HTML            : 'text/html',
    CONTENTTYPE_JSON            : 'application/json',
    CONTENTTYPE_BINARY          : 'application/octet-stream',

    RESPONSE_OK                 : 'OK',
    RESPONSE_INPROCESS          : 'IN_PROCESS',
    RESPONSE_ERROR              : 'ERROR',

    DEFAULT_CACHE_EXPIRE_SECS   : 10*60,    

    ERR_CONSTRAINT : 'errConstraint',
    
    SIG_RESTART : 'bounce',
    
    JOB_USER_NOTIFICATION : 'userNotify',
    
    JOB_USER_STAT : 'userStat',
    JOB_USER_STAT_IN_MB : 'userStatInMB',
    JOB_USER_STAT_OUT_MB : 'userStatOutMB',
    
    JOB_ATTACH_REFERER_ICON : 'attachBipRefererIcon',    
    
    JOB_BIP_TRIGGER : 'bipTrigger',
    
    JOB_BIP_ACTIVITY : 'bipActivity',
    
    JOB_BIP_SET_DEFAULTS : 'transformDefaults',    
    
    JOB_SET_DEFAULT_SPACE : 'spaceDefault'
};

module.exports = defs;

var camelCaseTokenizer = function (builder) {

  var pipelineFunction = function (token) {
    var previous = '';
    // split camelCaseString to on each word and combined words
    // e.g. camelCaseTokenizer -> ['camel', 'case', 'camelcase', 'tokenizer', 'camelcasetokenizer']
    var tokenStrings = token.toString().trim().split(/[\s\-]+|(?=[A-Z])/).reduce(function(acc, cur) {
      var current = cur.toLowerCase();
      if (acc.length === 0) {
        previous = current;
        return acc.concat(current);
      }
      previous = previous.concat(current);
      return acc.concat([current, previous]);
    }, []);

    // return token for each string
    // will copy any metadata on input token
    return tokenStrings.map(function(tokenString) {
      return token.clone(function(str) {
        return tokenString;
      })
    });
  }

  lunr.Pipeline.registerFunction(pipelineFunction, 'camelCaseTokenizer')

  builder.pipeline.before(lunr.stemmer, pipelineFunction)
}
var searchModule = function() {
    var documents = [];
    var idMap = [];
    function a(a,b) { 
        documents.push(a);
        idMap.push(b); 
    }

    a(
        {
            id:0,
            title:"RoomLoader",
            content:"RoomLoader",
            description:'',
            tags:''
        },
        {
            url:'/ASL/api/global/RoomLoader',
            title:"RoomLoader",
            description:""
        }
    );
    a(
        {
            id:1,
            title:"PortalManager",
            content:"PortalManager",
            description:'',
            tags:''
        },
        {
            url:'/ASL/api/ASL.PortalSystem/PortalManager',
            title:"PortalManager",
            description:""
        }
    );
    a(
        {
            id:2,
            title:"RoomWorld",
            content:"RoomWorld",
            description:'',
            tags:''
        },
        {
            url:'/ASL/api/global/RoomWorld',
            title:"RoomWorld",
            description:""
        }
    );
    a(
        {
            id:3,
            title:"SmoothMouseLook",
            content:"SmoothMouseLook",
            description:'',
            tags:''
        },
        {
            url:'/ASL/api/ASL.PlayerSystem/SmoothMouseLook',
            title:"SmoothMouseLook",
            description:""
        }
    );
    a(
        {
            id:4,
            title:"ASLLocalEventManager LocalEventArgs",
            content:"ASLLocalEventManager LocalEventArgs",
            description:'',
            tags:''
        },
        {
            url:'/ASL/api/ASL.LocalEventSystem/LocalEventArgs',
            title:"ASLLocalEventManager.LocalEventArgs",
            description:""
        }
    );
    a(
        {
            id:5,
            title:"PlayerController",
            content:"PlayerController",
            description:'',
            tags:''
        },
        {
            url:'/ASL/api/ASL.PlayerSystem/PlayerController',
            title:"PlayerController",
            description:""
        }
    );
    a(
        {
            id:6,
            title:"OnEnableTrigger",
            content:"OnEnableTrigger",
            description:'',
            tags:''
        },
        {
            url:'/ASL/api/ASL.LocalEventSystem/OnEnableTrigger',
            title:"OnEnableTrigger",
            description:""
        }
    );
    a(
        {
            id:7,
            title:"ASLLocalEventManager",
            content:"ASLLocalEventManager",
            description:'',
            tags:''
        },
        {
            url:'/ASL/api/ASL.LocalEventSystem/ASLLocalEventManager',
            title:"ASLLocalEventManager",
            description:""
        }
    );
    a(
        {
            id:8,
            title:"LocalEventHandler",
            content:"LocalEventHandler",
            description:'',
            tags:''
        },
        {
            url:'/ASL/api/ASL.LocalEventSystem/LocalEventHandler',
            title:"LocalEventHandler",
            description:""
        }
    );
    a(
        {
            id:9,
            title:"PortalCursor",
            content:"PortalCursor",
            description:'',
            tags:''
        },
        {
            url:'/ASL/api/ASL.PortalSystem/PortalCursor',
            title:"PortalCursor",
            description:""
        }
    );
    a(
        {
            id:10,
            title:"BillboardText",
            content:"BillboardText",
            description:'',
            tags:''
        },
        {
            url:'/ASL/api/ASL.PlayerSystem/BillboardText',
            title:"BillboardText",
            description:""
        }
    );
    a(
        {
            id:11,
            title:"ControllerInstantiation",
            content:"ControllerInstantiation",
            description:'',
            tags:''
        },
        {
            url:'/ASL/api/ASL.PlayerSystem/ControllerInstantiation',
            title:"ControllerInstantiation",
            description:""
        }
    );
    a(
        {
            id:12,
            title:"Portal",
            content:"Portal",
            description:'',
            tags:''
        },
        {
            url:'/ASL/api/ASL.PortalSystem/Portal',
            title:"Portal",
            description:""
        }
    );
    a(
        {
            id:13,
            title:"PortalInstantiator",
            content:"PortalInstantiator",
            description:'',
            tags:''
        },
        {
            url:'/ASL/api/ASL.PortalSystem/PortalInstantiator',
            title:"PortalInstantiator",
            description:""
        }
    );
    a(
        {
            id:14,
            title:"VRAvatarInitialization",
            content:"VRAvatarInitialization",
            description:'',
            tags:''
        },
        {
            url:'/ASL/api/ASL.VirtualReality/VRAvatarInitialization',
            title:"VRAvatarInitialization",
            description:""
        }
    );
    a(
        {
            id:15,
            title:"VRInitilizationScript",
            content:"VRInitilizationScript",
            description:'',
            tags:''
        },
        {
            url:'/ASL/api/ASL.VirtualReality/VRInitilizationScript',
            title:"VRInitilizationScript",
            description:""
        }
    );
    a(
        {
            id:16,
            title:"Portal ViewType",
            content:"Portal ViewType",
            description:'',
            tags:''
        },
        {
            url:'/ASL/api/ASL.PortalSystem/ViewType',
            title:"Portal.ViewType",
            description:""
        }
    );
    a(
        {
            id:17,
            title:"ASLLocalEventManager LocalEvents",
            content:"ASLLocalEventManager LocalEvents",
            description:'',
            tags:''
        },
        {
            url:'/ASL/api/ASL.LocalEventSystem/LocalEvents',
            title:"ASLLocalEventManager.LocalEvents",
            description:""
        }
    );
    a(
        {
            id:18,
            title:"OnConnectToggle",
            content:"OnConnectToggle",
            description:'',
            tags:''
        },
        {
            url:'/ASL/api/ASL/OnConnectToggle',
            title:"OnConnectToggle",
            description:""
        }
    );
    a(
        {
            id:19,
            title:"PortalWorld",
            content:"PortalWorld",
            description:'',
            tags:''
        },
        {
            url:'/ASL/api/global/PortalWorld',
            title:"PortalWorld",
            description:""
        }
    );
    a(
        {
            id:20,
            title:"VRAvatarInitialization VRDevice",
            content:"VRAvatarInitialization VRDevice",
            description:'',
            tags:''
        },
        {
            url:'/ASL/api/ASL.VirtualReality/VRDevice',
            title:"VRAvatarInitialization.VRDevice",
            description:""
        }
    );
    a(
        {
            id:21,
            title:"PrefabInstantiator",
            content:"PrefabInstantiator",
            description:'',
            tags:''
        },
        {
            url:'/ASL/api/ASL.Manipulation.Objects/PrefabInstantiator',
            title:"PrefabInstantiator",
            description:""
        }
    );
    a(
        {
            id:22,
            title:"SmoothMouseLook RotationAxes",
            content:"SmoothMouseLook RotationAxes",
            description:'',
            tags:''
        },
        {
            url:'/ASL/api/ASL.PlayerSystem/RotationAxes',
            title:"SmoothMouseLook.RotationAxes",
            description:""
        }
    );
    a(
        {
            id:23,
            title:"World",
            content:"World",
            description:'',
            tags:''
        },
        {
            url:'/ASL/api/global/World',
            title:"World",
            description:""
        }
    );
    a(
        {
            id:24,
            title:"WorldManager",
            content:"WorldManager",
            description:'',
            tags:''
        },
        {
            url:'/ASL/api/ASL.WorldSystem/WorldManager',
            title:"WorldManager",
            description:""
        }
    );
    a(
        {
            id:25,
            title:"AvatarManager",
            content:"AvatarManager",
            description:'',
            tags:''
        },
        {
            url:'/ASL/api/ASL.PlayerSystem/AvatarManager',
            title:"AvatarManager",
            description:""
        }
    );
    a(
        {
            id:26,
            title:"PortalSelector",
            content:"PortalSelector",
            description:'',
            tags:''
        },
        {
            url:'/ASL/api/ASL.PortalSystem/PortalSelector',
            title:"PortalSelector",
            description:""
        }
    );
    a(
        {
            id:27,
            title:"OnConnectScript",
            content:"OnConnectScript",
            description:'',
            tags:''
        },
        {
            url:'/ASL/api/ASL/OnConnectScript',
            title:"OnConnectScript",
            description:""
        }
    );
    a(
        {
            id:28,
            title:"VRInitilizationScript SupportedDevices",
            content:"VRInitilizationScript SupportedDevices",
            description:'',
            tags:''
        },
        {
            url:'/ASL/api/ASL.VirtualReality/SupportedDevices',
            title:"VRInitilizationScript.SupportedDevices",
            description:""
        }
    );
    var idx = lunr(function() {
        this.field('title');
        this.field('content');
        this.field('description');
        this.field('tags');
        this.ref('id');
        this.use(camelCaseTokenizer);

        this.pipeline.remove(lunr.stopWordFilter);
        this.pipeline.remove(lunr.stemmer);
        documents.forEach(function (doc) { this.add(doc) }, this)
    });

    return {
        search: function(q) {
            return idx.search(q).map(function(i) {
                return idMap[i.ref];
            });
        }
    };
}();

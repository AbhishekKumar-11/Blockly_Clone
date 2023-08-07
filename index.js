
// const jsCode = Blockly.JavaScript.workspaceToCode(workspace);
// const pythonCode = Blockly.Python.workspaceToCode(workspace);
// const phpCode = Blockly.PHP.workspaceToCode(workspace);
// const luaCode = Blockly.Lua.workspaceToCode(workspace);
// const dartCode = Blockly.Dart.workspaceToCode(workspace);

// import {javascriptGenerator} from 'blockly/javascript';
// function updateCode(event) {
//   const code = javascriptGenerator.workspaceToCode(workspace);
//   document.getElementById('textarea').value = code;
// }
// workspace.addChangeListener(updateCode);


const toolbox = {
  "kind": "categoryToolbox",
  "contents": [

    {
      "kind": "category",
      "name": "Logic",
      "categorystyle": "logic_category",
      "css-icon": "customIcon fa fa-cog",

      "contents": [
        {
          "kind": "block",
          "type": "controls_if"
        },
        {
          "kind": "block",
          "type": "logic_compare"
        },
        {
          "kind": "block",
          "type": "logic_operation"
        },
        {
          "kind": "block",
          "type": "logic_boolean"
        },
        {
          "kind": "block",
          "type": "math_number"
        },
       
      ]
    },
    {
      "kind": "category",
      "name": "Loops",
      "colour": "160",
    


      "contents": [
        {
          "kind": "block",
          "type": "controls_repeat",

          'colourPrimary': '#4a148c',
           'colourSecondary':'#AD7BE9',
           'colourTertiary':'#CDB6E9',
            'hat': 'cap'
        },{
          "kind": "block",
          "type": "controls_whileUntil"

        },{
          "kind": "block",
          "type": "controls_for"

        },{
          "kind": "block",
          "type": "controls_forEach"

        },{
          "kind": "block",
          "type": "controls_flow_statements"

        }

      ]
    },
    {
      "kind": "category",
      "name": "Math",
      "colour": "230  ",

      "contents": [
        {
          "kind": "block",
          "type": "math_number"

        },{
          "kind": "block",
          "type": "math_arithmetic"

        },{
          "kind": "block",
          "type": "math_single"

        },{
          "kind": "block",
          "type": "math_trig"

        },{
          "kind": "block",
          "type": "math_constant"

        },{
          "kind": "block",
          "type": "math_number_property"

        },{
          "kind": "block",
          "type": "math_round"

        },{
          "kind": "block",
          "type": "math_on_list"

        },{
          "kind": "block",
          "type": "math_modulo"

        },{
          "kind": "block",
          "type": "math_constrain"

        },{
          "kind": "block",
          "type": "math_random_int"

        },{
          "kind": "block",
          "type": "math_random_float"

        },{
          "kind": "block",
          "type": "math_atan2"

        },
      ]

    },
    {
      "kind": "category",
      "name": "text",
      "colour": "290  ",
      
      

    
      "contents": [

        
      {
        "kind": "block",
        "type": "text",
        
        

      }, {
        "kind": "block",
        "type": "text_multiline"

      }, {
        "kind": "block",
        "type": "text_create_join_item"

      }, {
        "kind": "block",
        "type": "text_create_join_container"

      }, {
        "kind": "block",
        "type": "text_length"

      }, {
        "kind": "block",
        "type": "text_isEmpty"

      }, {
        "kind": "block",
        "type": "text_indexOf"

      }, {
        "kind": "block",
        "type": "text_charAt"

      }, {
        "kind": "block",
        "type": "text_getSubstring"

      }, {
        "kind": "block",
        "type": "text_changeCase"

      }, {
        "kind": "block",
        "type": "text_count"

      }, {
        "kind": "block",
        "type": "text_replace"

      }, {
        "kind": "block",
        "type": "text_reverse"

      },
      {
        "kind": "block",
        "type": "text_print"

      }, {
        "kind": "block",
        "type": "text_prompt"

      },  
     
        ] }
    
  
    
    
    ,{ 
      "kind": "sep",
      
    },
    {
      "kind": "category",
      "name": "Variables",
      "custom": "VARIABLE",
    
    },
    {
      "kind": "category",
      "name": "Functions",
      "custom": "PROCEDURE"
    }
   
  ]
}


  var workspace =Blockly.inject('blocklyDiv', {
  toolbox: toolbox,
  grid:
  {spacing:20,
    length:3,
    colour:'rgb(255, 0, 0)',
    sanp: true,
    trachan: true



  },
  scrollbars: true,
});





const mathCategory = {
  'colour':'290'
}

const categoryStyles = {
  'list_category': {
     'colour': '#4a148c'
  },
  'logic_category': {
     'colour': '#01579b',
  }
}
const blockStyles = {
  'list_blocks': {
     'colourPrimary': '#4a148c',
     'colourSecondary':'#AD7BE9',
     'colourTertiary':'#CDB6E9'
  },
  'logic_blocks': {
     'colourPrimary': '#01579b',
     'colourSecondary':'#64C7FF',
     'colourTertiary':'#C5EAFF'
  }
}



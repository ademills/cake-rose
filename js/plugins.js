try {
transform.OnReady(function()
{
    transform.ItemAdd({
        id: 'pretty-forms',
        name: 'Pretty Forms',
        options: {
            a: {'label': 'Preview in Builder', 'type': 'TOGGLE', 'value': true},

            f1: {'label': 'Enable', 'type': 'TOGGLE', 'value': true, 'group':'Select'},
            sa: {'label': 'Background', 'type': 'COLOR', 'value': '#FFFFFF', 'group':'Select'},
            sb: {'label': 'Border Color', 'type': 'COLOR', 'value': '#EAEAEA', 'group':'Select'},
            sc: {'label': 'Border Width', 'type': 'INPUT', 'value': '1px', 'group':'Select', 'units':'px,%'},
            sd: {'label': 'Border Radius', 'type': 'INPUT', 'value': '5px', 'group':'Select', 'units':'px,%'},
            scol: {'label': 'Color', 'type': 'COLOR', 'value': '#000000', 'group':'Select'},
            sfs: {'label': 'Font Size', 'type': 'INPUT', 'value': '16px', 'group':'Select', 'units':'px'},
            se: {'label': 'Height', 'type': 'INPUT', 'value': '50px', 'group':'Select', 'units':'px,%'},
            sf: {'label': 'Sides Padding', 'type': 'INPUT', 'value': '15px', 'group':'Select', 'units':'px,%'},
            sg: {'label': 'Arrow Image', 'type': 'FILE', 'value': 'https://global.divhunt.com/88492b469a358146de29bf51e44133f8_212.svg', 'group':'Select'},

            sda: {'label': 'Background', 'type': 'COLOR', 'value': '#FFFFFF', 'group':'Select Dropdown'},
            sdb: {'label': 'Border Color', 'type': 'COLOR', 'value': '#EAEAEA', 'group':'Select Dropdown'},
            sdc: {'label': 'Border Width', 'type': 'INPUT', 'value': '1px', 'group':'Select Dropdown', 'units':'px,%'},
            sdd: {'label': 'Border Radius', 'type': 'INPUT', 'value': '5px', 'group':'Select Dropdown', 'units':'px,%'},
            sde: {'label': 'Color', 'type': 'COLOR', 'value': '#000000', 'group':'Select Dropdown'},
            sdf: {'label': 'Font Size', 'type': 'INPUT', 'value': '13px', 'group':'Select Dropdown', 'units':'px'},
            sdg: {'label': 'Hover Color', 'type': 'COLOR', 'value': '#000000', 'group':'Select Dropdown'},
            sdh: {'label': 'Hover Background', 'type': 'COLOR', 'value': '#f8f8f8', 'group':'Select Dropdown'},


            f2: {'label': 'Enable', 'type': 'TOGGLE', 'value': true, 'group':'Checkbox'},
            ca: {'label': 'Width', 'type': 'INPUT', 'value': '20px', 'group':'Checkbox', 'units':'px,%'},
            cb: {'label': 'Height', 'type': 'INPUT', 'value': '20px', 'group':'Checkbox', 'units':'px,%'},
            cc: {'label': 'Check Icon Color', 'type': 'COLOR', 'value': '#FFFFFF', 'group':'Checkbox'},
            ci: {'label': 'Border Width', 'type': 'INPUT', 'value': '1px', 'group':'Checkbox', 'units':'px,%'},
            cd: {'label': 'Border Color', 'type': 'COLOR', 'value': '#EAEAEA', 'group':'Checkbox'},
            ce: {'label': 'Border Color (checked)', 'type': 'COLOR', 'value': '#1397FF', 'group':'Checkbox'},
            cf: {'label': 'Background', 'type': 'COLOR', 'value': '#FFFFFF', 'group':'Checkbox'},
            cg: {'label': 'Background (checked)', 'type': 'COLOR', 'value': '#1397FF', 'group':'Checkbox'},
            ch: {'label': 'Border Radius', 'type': 'INPUT', 'value': '2px', 'group':'Checkbox', 'units':'px,%'},


            f3: {'label': 'Enable', 'type': 'TOGGLE', 'value': true, 'group':'Radio'},
            ra: {'label': 'Width', 'type': 'INPUT', 'value': '20px', 'group':'Radio', 'units':'px,%'},
            rb: {'label': 'Height', 'type': 'INPUT', 'value': '20px', 'group':'Radio', 'units':'px,%'},
            ri: {'label': 'Border Width', 'type': 'INPUT', 'value': '1px', 'group':'Radio', 'units':'px,%'},
            rd: {'label': 'Border Color', 'type': 'COLOR', 'value': '#EAEAEA', 'group':'Radio'},
            re: {'label': 'Border Color (checked)', 'type': 'COLOR', 'value': '#1397FF', 'group':'Radio'},
            rf: {'label': 'Background', 'type': 'COLOR', 'value': '#FFFFFF', 'group':'Radio'},
            rg: {'label': 'Background (checked)', 'type': 'COLOR', 'value': '#FFFFFF', 'group':'Radio'},
            rm: {'label': 'Circle Color', 'type': 'COLOR', 'value': '#1397FF', 'group':'Radio'},
            rn: {'label': 'Circle Width', 'type': 'INPUT', 'value': '50%', 'group':'Radio', 'units':'px,%'},
            ro: {'label': 'Circle Height', 'type': 'INPUT', 'value': '50%', 'group':'Radio', 'units':'px,%'},
        },
        
        code: function(transform, tag, target, options, data, index)
        {
            this.init = () => {
                if (options.a || data.mode === "website") {
                    this.selects();
                    this.multiselects();
                    this.checkboxes();
                    this.radios();
                }
            }

            this.checkboxes = () => {

                if (!options.f2) {return;}

                $(target).find("input[type='checkbox']").each(function(){
                    if ($(this).hasClass("cancel-pretty")) {return;}
                    /* requirements - parent needs to be div, and inside we need exactly checkbox + label */
                    var parent = $(this).parent();
                    let children = parent.children();
                    if ( !parent.is('div') ) {return;}
                    if ( children.length != 2 ) {return;}
                    if ( children.filter('input').length != 1 && children.filter('label').length != 1 )  {return;} 


                    /* Append fake checkbox (span), which we acutally can edit */
                    $(parent).find("label").prepend(
                        `<span>
                            <svg viewBox="0 0 87 73" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M84.6741 6.04233L79.0401 1.56395C76.2631 -0.640438 74.649 -0.614913 72.2714 2.2856L31.3228 52.1952L12.2665 36.558C9.63745 34.3768 7.99284 34.4928 5.83135 37.1613L1.48253 42.7535C-0.723604 45.4962 -0.441671 47.0532 2.16621 49.2042L29.3258 71.392C32.1217 73.7124 33.6958 73.4734 35.8573 70.8768L85.3813 12.7251C87.7072 9.96382 87.5663 8.31401 84.6741 6.04233Z" fill="currentColor"/>
                            </svg>
                        </span>`);
                    $(parent).addClass("plugin_form_prettify_checkbox");
                });


                /* Create style for this transform, based on options above */
                let tagId = tag.Get('id');
                let cls = `.t${tagId}`;
                let css_id = `plugin_pretty-forms_checkboxes_${tagId}`;
                $("#"+css_id).remove();

                let style = `
                    <style id="${css_id}">
                        ${cls} .plugin_form_prettify_checkbox input[type='checkbox'] + label > span{
                            width: ${options.ca};
                            height: ${options.cb};
                            background: ${options.cf};
                            border: ${options.ci} solid ${options.cd};
                            border-radius: ${options.ch};
                        }

                        ${cls} .plugin_form_prettify_checkbox input[type='checkbox'] + label > span {
                            color:${options.cc};
                        }

                        ${cls} .plugin_form_prettify_checkbox input[type='checkbox']:checked + label > span{
                            border: 1px solid ${options.ce};
                            background: ${options.cg};
                        }

                    </style>
                `;

                $("body").append(style);
            }


             this.radios = () => {

                if (!options.f3) {return;}

                $(target).find("input[type='radio']").each(function(){
                    if ($(this).hasClass("cancel-pretty")) {return;}
                    /* requirements - parent needs to be div, and inside we need exactly radio + label */
                    var parent = $(this).parent();
                    let children = parent.children();
                    if ( !parent.is('div') ) {return;}
                    if ( children.length != 2 ) {return;}
                    if ( children.filter('input').length != 1 && children.filter('label').length != 1 )  {return;} 

                    /* Append fake radio (span), which we acutally can edit */
                    $(parent).find("label").prepend(`<span> <dot> </dot> </span>`);
                    $(parent).addClass("plugin_form_prettify_radio");
                });


                /* Create style for this transform, based on options above */
                let tagId = tag.Get('id');
                let cls = `.t${tagId}`;
                let css_id = `plugin_pretty-forms_radios_${tagId}`;
                $("#"+css_id).remove();

                let style = `
                    <style id="${css_id}">
                        ${cls} .plugin_form_prettify_radio input[type='radio'] + label > span{
                            width: ${options.ra};
                            height: ${options.rb};
                            background: ${options.rf};
                            border: ${options.ri} solid ${options.rd};
                        }

                        ${cls} .plugin_form_prettify_radio input[type='radio']:checked + label > span {
                            border: ${options.ri} solid ${options.re};
                            background: ${options.rg};
                        }

                        ${cls} .plugin_form_prettify_radio input[type='radio'] + label > span > dot {
                            background:${options.rm};
                        }

                        ${cls} .plugin_form_prettify_radio input[type='radio']:checked + label > span > dot {
                            width: ${options.rn};
                            height: ${options.ro};
                        }

                    </style>
                `;

                $("body").append(style);

            }



            this.selects = () => {

                if (!options.f1) {return;}

                $(target).find("select:not([multiple])").each(function() {

                    if ($(this).hasClass("cancel-pretty")) {return;}

                    let currentVal = $(this)?.find("option[selected]")?.text();
                    if (!currentVal) {
                        currentVal = $(this).attr("placeholder") ?? "Select value";
                    }

                    let $this = $(this);
                    let $options = $this.find("option");
                    let $customSelect = $('<div class="plugin_form_prettify_select"></div>');
                    let $opener = $(`<div class="opener"><selected>${currentVal}</selected><img alt="open select arrow" src="${options.sg}"/> </div>`);
                    let $optionsDropdown = $('<div class="options-dropdown"></div>');

                    $customSelect.append($opener);
                    $customSelect.append($optionsDropdown);

                    // add options to custom select
                    $options.each(function() {
                        let $thisOption = $(this);
                        let value = $thisOption.val();
                        let text = $thisOption.text();

                        let $customOption = $('<span value="' + value + '">' + text + '</span>');
                        $customOption.data('select', $this);
                        $customOption.data('selectedText', text);
                        $customOption.data('selectedValue', value);

                        $optionsDropdown.append($customOption);
                    });

                    $this.after($customSelect);
                    $this.hide(); 
                });

              
                $(target).find(".plugin_form_prettify_select .opener").on('click', function() {
                    let wasOpened =  $(this).parent().hasClass("opened");
                    $(".plugin_form_prettify_select").removeClass("opened");
                    $(".plugin_form_prettify_multiselect").removeClass("opened");
                    if (wasOpened) {
                        $(this).parent().removeClass("opened");
                    } else {
                        $(this).parent().addClass("opened");

                    }
                });

                $(target).find(".plugin_form_prettify_select .options-dropdown span").on('click', function() {
                    let $this = $(this);
                    let $select = $this.data('select');
                    let selectedText = $this.data('selectedText');
                    let selectedValue = $this.data('selectedValue');
                    $(this).closest(".plugin_form_prettify_select").removeClass("opened");

                    $this.parents('.plugin_form_prettify_select').find('.opener selected').text(selectedText);
                    $select.val(selectedValue).trigger('change');
                });


                /* Create style for this transform, based on options above */
                let tagId = tag.Get('id');
                let cls = `.t${tagId}`;
                let css_id = `plugin_pretty-forms_selects_${tagId}`;
                $("#"+css_id).remove();

                let style = `
                    <style id="${css_id}">


                        ${cls} .plugin_form_prettify_select > .opener {
                            padding: 0 ${options.sf};
                            border-radius: ${options.sd};
                            height: ${options.se};
                            background: ${options.sa};
                            border: ${options.sc} solid ${options.sb};
                            color: ${options.scol};
                            font-size: ${options.sfs};
                        }

                        ${cls} .plugin_form_prettify_select .options-dropdown {
                            background: ${options.sda};
                            border: ${options.sdc} solid ${options.sdb};
                            border-radius: ${options.sdd};
                        }


                        ${cls} .plugin_form_prettify_select .options-dropdown > span {
                            font-size: ${options.sdf};
                            color: ${options.sde};
                        }

                        ${cls} .plugin_form_prettify_select.opened .options-dropdown > span:hover {
                            background: ${options.sdh};
                            color: ${options.sdg};
                        }

                    </style>
                `;

                $("body").append(style);
     
            }

            this.multiselects = () => {

                if (!options.f1) {return;}

                $(target).find("select[multiple]").each(function() {

                    if ($(this).hasClass("cancel-pretty")) {return;}

                    let $this = $(this);
                    let $options = $this.find("option");
                    let $customSelect = $('<div class="plugin_form_prettify_multiselect"></div>');
                    let $opener = $(`<div class="opener"><selected>Select value</selected><img alt="open select arrow" src="${options.sg}"/> </div>`);
                    let $optionsDropdown = $('<div class="options-dropdown"></div>');

                    $customSelect.append($opener);
                    $customSelect.append($optionsDropdown);

                    // add options to custom select
                    $options.each(function() {
                        let $thisOption = $(this);
                        let value = $thisOption.val();
                        let text = $thisOption.text();
                        let $customOption = $('<span value="' + value + '">' + text + '</span>');

                        $customOption.data('select', $this);
                        $customOption.data('selectedText', text);
                        $customOption.data('selectedValue', value);

                        $optionsDropdown.append($customOption);
                    });

                    $this.after($customSelect);
                    $this.hide(); 
                });

                $(target).find(".plugin_form_prettify_multiselect .opener").on('click', function() {
                    let wasOpened =  $(this).parent().hasClass("opened");
                    $(".plugin_form_prettify_multiselect").removeClass("opened");
                    $(".plugin_form_prettify_select").removeClass("opened");
                    if (wasOpened) {
                        $(this).parent().removeClass("opened");
                    } else {
                        $(this).parent().addClass("opened");
                    }
                });

                $(target).find(".plugin_form_prettify_multiselect .options-dropdown span").on('click', function() {
                    let $this = $(this);
                    let $select = $this.data('select');
                    let selectedValue = $this.data('selectedValue');

            
                    $this.toggleClass("dh-active");
                    $select.find('option[value="'+selectedValue+'"]').prop('selected', $this.hasClass("dh-active")).trigger('change');

         
                    let $activeOptions = $this.closest('.options-dropdown').find('.dh-active');

                    let selectedItemsText = '';
                    if($activeOptions.length > 1) {
                        selectedItemsText = $activeOptions.length + ' Selected items';
                    } else if($activeOptions.length == 1) {
                        selectedItemsText = $activeOptions.first().data('selectedText');
                    } else {
                        selectedItemsText = 'Select value';
                    }
                    $(this).parents('.plugin_form_prettify_multiselect').find('.opener selected').text(selectedItemsText);

                });


                

                /* Create style for this transform, based on options above */
                let tagId = tag.Get('id');
                let cls = `.t${tagId}`;
                let css_id = `plugin_pretty-forms_multiselects_${tagId}`;
                 $("#"+css_id).remove();

                
                let style = `
                    <style id="${css_id}">

                        ${cls} .plugin_form_prettify_multiselect > .opener {
                            padding: 0 ${options.sf};
                            border-radius: ${options.sd};
                            height: ${options.se};
                            background: ${options.sa};
                            border: ${options.sc} solid ${options.sb};
                        }

                        ${cls} .plugin_form_prettify_multiselect .options-dropdown {
                            background: ${options.sda};
                            border: ${options.sdc} solid ${options.sdb};
                            border-radius: ${options.sdd};
                        }


                        ${cls} .plugin_form_prettify_multiselect .options-dropdown > span {
                            font-size: ${options.sdf};
                            color: ${options.sde};
                        }

                        ${cls} .plugin_form_prettify_multiselect.opened .options-dropdown > span:hover {
                            background: ${options.sdh};
                            color: ${options.sdg};
                        }


                        ${cls} .plugin_form_prettify_multiselect .options-dropdown > span.dh-active {
                            background: ${options.sdh};
                            color: ${options.sdg};
                        }
                    </style>
                `;

                $("body").append(style);

            }



            return this;
        },
    });
});
} catch (error) { console.log(error); }

try {
$(document).mouseup(function(e) {
    var container = $(".plugin_form_prettify_select");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.removeClass("opened");
    }
});

$(document).mouseup(function(e) {
    var container = $(".plugin_form_prettify_multiselect");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.removeClass("opened");
    }
});
} catch (error) { console.log(error); }

try {
$(document).on('click','.plugin_form_prettify_checkbox label, .plugin_form_prettify_checkbox span',function(){
    $(this).parent().find("input").trigger("click");
});

$(document).on('click','.plugin_form_prettify_radio label, .plugin_form_prettify_radio span',function(){
    $(this).parent().find("input").trigger("click");
});
} catch (error) { console.log(error); }

try {
transform.OnReady(function()
{


    this.animations =  [
        {value: 'fadeIn', title: 'Fade In'},
        {value: 'fadeInDown', title: 'Fade In Down'},
        {value: 'fadeInUp', title: 'Fade In Up'},
        {value: 'fadeInLeft', title: 'Fade In Left'},
        {value: 'fadeInRight', title: 'Fade In Right'},
    ];

    let callbacks = [];
    $(window).on('scroll', () => 
    {
        callbacks.forEach((callback) =>
        {
            callback();
        });
    });

    $(document).on('dh/pages/unload', (event, page) =>
    {
        callbacks = [];
    });


    transform.ItemAdd({
        id: 'simple-animations',
        name: 'Simple Animation',
        options: {
            a: {'label': 'Type', 'type': 'SELECT', 'value': 'fadeIn', 'values': this.animations},
            b: {'label': 'Delay (ms)', 'type': 'INPUT', 'value': '200'},
            c: {'label': 'Offset (px)', 'type': 'INPUT', 'value': '100'},
            d: {'label': 'Duration (ms)', 'type': 'INPUT', 'value': '600'},
        },
        code: function(transform, tag, target, options, data, index)
        {
            
            this.init = () => {

                if (data.mode === "website") {
                    $(target).css("opacity", "0");
                    this.startAnimation(target);
                    callbacks.push(() => {
                        if(!$(target).hasClass('plugin_simpleScroll-is-animated')) {
                            this.startAnimation(target);
                        }
                    });
                }

            }

            this.startAnimation = (target) => {
          
                let offset = options.c;
                if (!offset) {offset = 0}
                const elPos = parseInt ( $(target).offset().top ) + parseInt ( offset );
                const topOfWindow = $(window).scrollTop();
                if (elPos < topOfWindow + $(window).height()) {
                    $(target).addClass('plugin_simpleScroll-is-animated');
                    $(target).css("animation", `${options.a} ${options.d}ms ease ${options.b}ms forwards`);
                }
            }

         


            return this;
        },
    });
});
} catch (error) { console.log(error); }

try {
mdLibraries.ItemAdd({
    id: 'swiper',
    js: ['https://static.divhunt.com/assets/library/Swiper.js'],
    css: ['https://static.divhunt.com/assets/library/Swiper.css'],
});


transform.OnReady(function()
{
    this.effects =  [
        {value: 'default', title: 'Slide'},
        {value: 'fade', title: 'Fade'},
        {value: 'cube', title: 'Cube'},
        {value: 'flip', title: 'Flip'},
        {value: 'coverflow', title: 'Coverflow'},
        {value: 'creative', title: 'Creative'},
    ];

    this.pag =  [
        {value: 'bullets', title: 'Bullets'},
        {value: 'fraction', title: 'Numbers'},
        {value: 'progressbar', title: 'Progress Bar'}
    ];

    this.bullet_shapes =  [
        {value: 'circle', title: 'Circle'},
        {value: 'line', title: 'Line'},
        {value: 'square', title: 'Square'}
    ];

    this.bullet_positions =  [
        {value: 'center', title: 'Center'},
        {value: 'left', title: 'Left'},
        {value: 'right', title: 'Right'}
    ];

    this.direcitons =  [
        {value: 'horizontal', title: 'Horizontal'},
        {value: 'vertical', title: 'Vertical'}
    ];


    transform.ItemAdd({
        id: 'swiper',
        name: 'Swiper',
        bind: [
            'component.render',
        ],
        options: {
            
            a: {'label': 'Slides per View', 'type': 'INPUT', 'value': '1', 'placeholder': '1', condition: function(value, values){ return values.c === "default"; }},
            b: {'label': 'Space Between (px)', 'type': 'INPUT', 'value': 0, 'placeholder': '0', condition: function(value, values){ return values.c === "default"; }},
            c: {'label': 'Effect', 'type': 'SELECT', 'values': this.effects, 'value': 'default'},
            speed: {'label': 'Speed (ms)', 'type': 'INPUT', 'value': 300},
            d: {'label': 'Freemode', 'type': 'TOGGLE', 'value': false},
            e: {'label': 'Loop', 'type': 'TOGGLE', 'value': false},
            f: {'label': 'Centered', 'type': 'TOGGLE', 'value': false},
            g: {'label': 'Grab Cursor', 'type': 'TOGGLE', 'value': false},
            h: {'label': 'Initial Slide', 'type': 'INPUT', 'value': 1},
            i: {'label': 'Disable Drag', 'type': 'TOGGLE', 'value': false},
            j: {'label': 'Prevent Pointerdown', 'type': 'TOGGLE', 'value': true},
            k: {'label': 'Direction', 'type': 'SELECT', 'values': this.direcitons, 'value': 'horizontal'},

            ca: {'label': 'Keyboard Control', 'type': 'TOGGLE', 'value': false, 'group': "Controls"},
            cb: {'label': 'Mousewheel Control', 'type': 'TOGGLE', 'value': false, 'group': "Controls"},

            na: {'label': 'Next Class', 'type': 'INPUT', 'value': '', 'group': "Navigation (Arrows)"},
            nb: {'label': 'Previous Class', 'type': 'INPUT', 'value': '', 'group': "Navigation (Arrows)"},
            
            pa: {'label': 'Enable', 'type': 'TOGGLE', 'value': false, 'group': "Pagination"},
            pd: {'label': 'Type', 'type': 'SELECT', 'value': 'bullets', 'values': this.pag, 'group': "Pagination" , condition: function(value, values){ return values.pa; } },
            pb: {'label': 'Dynamic Bullets', 'type': 'TOGGLE', 'value': false, 'group': "Pagination", condition: function(value, values){ return values.pa && values.pd === "bullets"; }},
            pc: {'label': 'Clickable', 'type': 'TOGGLE', 'value': false, 'group': "Pagination", condition: function(value, values){ return values.pa && values.pd === "bullets"; }},

            cna: {'label': 'Enable', 'type': 'TOGGLE', 'value': false, 'group': "Custom Navigation"},
            cnb: {
                label: 'Navigation',
                type: 'TAG', 
                value: '',
                group: "Custom Navigation",
                condition: function(value, values){ return values.cna; }
            },

            bullet_shape: {'label': 'Shape', 'type': 'SELECT', 'value': 'circle', 'values': this.bullet_shapes, 'group': "Pagination", condition: function(value, values){ return values.pa && values.pd === "bullets"; }},
            bullet_color: {'label': 'Color', 'type': 'COLOR', 'value': 'rgba(0,0,0,0.2)', 'group': "Pagination", condition: function(value, values){ return values.pa && values.pd === "bullets"; }},
            bullet_bgcolor: {'label': 'Background', 'type': 'COLOR', 'value': 'transparent', 'group': "Pagination", condition: function(value, values){ return values.pa && values.pd === "bullets" }},
            bullet_position: {'label': 'Position', 'type': 'SELECT', 'value': 'center', 'values': this.bullet_positions, 'group': "Pagination", condition: function(value, values){ return values.pa && values.pd === "bullets"; }},
            bullet_width: {'label': 'Width', 'type': 'INPUT', 'value': '6px', 'group': "Pagination", 'units':['px'], condition: function(value, values){ return values.pa && values.pd === "bullets" }},
            bullet_height: {'label': 'Height', 'type': 'INPUT', 'value': '6px', 'group': "Pagination", 'units':['px'], condition: function(value, values){ return values.pa && values.pd === "bullets" }},
            bullet_radius: {'label': 'Radius', 'type': 'INPUT', 'value': '100%', 'group': "Pagination", 'units':['%', 'px'], condition: function(value, values){ return values.pa && values.pd === "bullets" }},
            bullet_awidth: {'label': 'Active Width', 'type': 'INPUT', 'value': '6px', 'group': "Pagination", 'units':['px'], condition: function(value, values){ return values.pa && values.pd === "bullets" }},
            bullet_aheight: {'label': 'Active Height', 'type': 'INPUT', 'value': '6px', 'group': "Pagination", 'units':['px'], condition: function(value, values){ return values.pa && values.pd === "bullets" }},
            bullet_aradius: {'label': 'Active Radius', 'type': 'INPUT', 'value': '100%', 'group': "Pagination", 'units':['%', 'px'], condition: function(value, values){ return values.pa && values.pd === "bullets" }},
            bullet_acolor: {'label': 'Active Color', 'type': 'COLOR', 'value': '#007aff', 'group': "Pagination", condition: function(value, values){ return values.pa && values.pd === "bullets"; }},



            a1: {'label': 'Enable', 'type': 'TOGGLE', 'value': false, 'group': "Autoplay"},
            aa: {'label': 'Speed (ms)', 'type': 'INPUT', 'value': '5000', 'group': "Autoplay" , condition: function(value, values){ return values.a1; }},
            ab: {'label': 'Disable on Interaction', 'type': 'TOGGLE', 'value': false, 'group': "Autoplay", condition: function(value, values){ return values.a1; }},
            ac: {'label': 'Stop on Last Slide', 'type': 'TOGGLE', 'value': false, 'group': "Autoplay", condition: function(value, values){ return values.a1; }},
            ad: {'label': 'Pause on Mouse Enter', 'type': 'TOGGLE', 'value': false, 'group': "Autoplay", condition: function(value, values){ return values.a1; }},
            ae: {'label': 'Reverse Direction', 'type': 'TOGGLE', 'value': false, 'group': "Autoplay", condition: function(value, values){ return values.a1; }},


            ra: {'label': 'Slides per View', 'type': 'INPUT', 'value': '', 'group': "Landscape Tablet", 'placeholder': ''},
            rb: {'label': 'Space Between (px)', 'type': 'INPUT', 'value': '', 'group': "Landscape Tablet", 'placeholder': ''},
            
            rc: {'label': 'Slides per View', 'type': 'INPUT', 'value': '', 'group': "Tablet", 'placeholder': ''},
            rd: {'label': 'Space Between (px)', 'type': 'INPUT', 'value': '', 'group': "Tablet", 'placeholder': ''},

            re: {'label': 'Slides per View', 'type': 'INPUT', 'value': '', 'group': "Landscape Mobile", 'placeholder': ''},
            rf: {'label': 'Space Between (px)', 'type': 'INPUT', 'value': '', 'group': "Landscape Mobile", 'placeholder': ''},

            rg: {'label': 'Slides per View', 'type': 'INPUT', 'value': '', 'group': "Mobile", 'placeholder': ''}, 
            rh: {'label': 'Space Between (px)', 'type': 'INPUT', 'value': '', 'group': "Mobile", 'placeholder': ''}, 

        },
        
        code: function(transform, tag, target, options, data, index)
        {

            let swiperInstance;

            this.init = () =>
            {
                mdLibraries.Fn('load', ['swiper'], () =>
                {
                 
                    target.addClass("swiper");
                    
                    /* Wrapper */
                    let wrapper = target.children().first();
                    $(wrapper).addClass("swiper-wrapper");

                    /* Slides */
                    $(wrapper).find(">*").addClass("swiper-slide");

                    /* Pagination (dots) */
                    let pagClass = "";
                    if ( options.pa) {
                        $(target).append("<div class='swiper-pagination'></div>");
                        pagClass = ".swiper-pagination";
                    }


                    /* In builder swiper doesnt know which resolution is used on canvas, because it is watcing window width, so we need change swiper defaults based on breakpoint */
                    const breakpoints = this.breakpoints(options);
                    let slidesPerView = options.a;
                    let spaceBetween = options.b;

        
                    if (data.mode === "builder") {
                        const currentRes = responsive.GetSave("active.pixels", 1920);
                        const result = this.correct_slides_per_view_builder(breakpoints, slidesPerView, spaceBetween, currentRes);
                        slidesPerView = result.slidesPerView;
                        spaceBetween = result.spaceBetween;
                        breakpoints[1201].slidesPerView = slidesPerView;
                        breakpoints[1201].spaceBetween = spaceBetween;
                    }
                    
                    if (!data.mode) {
                        data.mode = "website";
                    }


                    let autoplayDelay = options.aa ? parseInt(options.aa) : 9999999999999;
                    if (!options.a1) {autoplayDelay = 9999999999999;}

                    /* Load Swiper */
                    swiperInstance = new Swiper(target[0], {
                        /* Defaults */
                        touchStartPreventDefault:options.j,
                        slidesPerView,
                        spaceBetween,
                        direction: options.k,
                        speed: options.speed ? options.speed : 300,
                        effect: options.c,
                        allowTouchMove: data.mode === 'website' && !options.i,
                        freeMode: options.d,
                        loop: options.e,
                        centeredSlides: options.f,
                        grabCursor: options.g,
                        initialSlide: parseInt(options.h) - 1,

                        /* Controls */
                        keyboard: { enabled: options.ca },
                        mousewheel: options.cb,

                        /* Navigation */
                        navigation: {
                            nextEl: options.na ? `.${options.na}`: '',
                            prevEl: options.nb ? `.${options.nb}`: '',
                        },

                        /* Pagination */
                        pagination: {
                            el: pagClass,
                            dynamicBullets: options.pb,
                            clickable: options.pc,
                            type: options.pd,
                        },             

                        /* Autoplay, if delay is not set, we are setting value to infinite */
                        /* If we dont send anything inside of autoplay, default is 1s */
                        autoplay : {
                            delay: autoplayDelay,
                            disableOnInteraction: options.ab ,
                            stopOnLastSlide: options.ac,
                            pauseOnMouseEnter: options.ad,
                            reverseDirection: options.ae,
                        },

                        /* Responsive */
                        breakpoints,
                        
                    });

                    this.customNav();

                    this.bulletStyles();

                });
            }


            this.breakpoints = (options) => 
            {
                const createBreakpoint = (slidesPerView, spaceBetween) => ({
                    slidesPerView: slidesPerView === 'auto' ? 'auto' : parseFloat(slidesPerView) || null,
                    spaceBetween: parseFloat(spaceBetween) || null,
                });
  
                const cleanBreakpoint = (bp, fallback) => {
                    const cleaned = { ...fallback };
                    if (bp.slidesPerView) cleaned.slidesPerView = bp.slidesPerView;
                    if (bp.spaceBetween) cleaned.spaceBetween = bp.spaceBetween;
                    return cleaned;
                };

                const default_res = {
                    slidesPerView: options.a,
                    spaceBetween: options.b,
                };

                const res_0 = createBreakpoint(options.rg, options.rh);
                const res_481 = createBreakpoint(options.re, options.rf);
                const res_768 = createBreakpoint(options.rc, options.rd);
                const res_992 = createBreakpoint(options.ra, options.rb);

                const breakpoints = {
                    1201: default_res,
                    992: cleanBreakpoint(res_992, default_res),
                    768: cleanBreakpoint(res_768, cleanBreakpoint(res_992, default_res)),
                    481: cleanBreakpoint(res_481, cleanBreakpoint(res_768, cleanBreakpoint(res_992, default_res))),
                    0: cleanBreakpoint(res_0, cleanBreakpoint(res_481, cleanBreakpoint(res_768, cleanBreakpoint(res_992, default_res)))),
                };

                return breakpoints;
            };


            this.correct_slides_per_view_builder = (breakpoints, defaultSlidesPerView, defaultSpaceBetween, currentRes) => {
                let slidesPerView = defaultSlidesPerView;
                let spaceBetween = defaultSpaceBetween;

                const breakpointKeys = Object.keys(breakpoints)
                    .map(Number)
                    .sort((a, b) => b - a);

                for (const key of breakpointKeys) {
                    if (currentRes > key) {
                        slidesPerView = breakpoints[key].slidesPerView;
                        spaceBetween = breakpoints[key].spaceBetween;
                        break;
                    }
                }

                return { slidesPerView: slidesPerView === 'auto' ? 'auto' : parseFloat(slidesPerView) || null, spaceBetween };
            }


            this.bulletStyles = () => {

                let id = tag.Get('id');
                let styleID = "dh-swiper-"+id;

                if (options.pd !== "bullets") {return;}

                let cssContent = `
                    .t${id} .swiper-pagination-bullet {
                        background:${options.bullet_color};
                        opacity:1;
                        transition:0.2s;
                        border-radius:${options.bullet_radius ? options.bullet_radius : '100%'};
                        width:${options.bullet_width ? options.bullet_width : '6px'};
                        height:${options.bullet_height ? options.bullet_height : '6px'};
                    }

                    .t${id} .swiper-pagination-bullet-active {
                        background:${options.bullet_acolor};
                        border-radius:${options.bullet_aradius ? options.bullet_aradius : '100%'};
                        width:${options.bullet_awidth ? options.bullet_awidth : '6px'};
                        height:${options.bullet_aheight ? options.bullet_aheight : '6px'};
                        background:${options.bullet_acolor};
                    }

                    .t${id} .swiper-pagination {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: ${options.bullet_bgcolor};
                        padding: 8px;
                        width: fit-content;
                        border-radius: 100px;
                    }
                `;

                /* SHAPE */
                if (options.bullet_shape === "line") {
                    cssContent += `
                        .t${id} .swiper-pagination-bullet {
                            width:20px;
                            height:2px;
                            border-radius:0;
                           
                        }
                        .t${id} .swiper-pagination {
                            border-radius:0;
                        }
                    `;
                }

                else if (options.bullet_shape === "square") {
                    cssContent += `
                        .t${id} .swiper-pagination-bullet {
                            width:8px;
                            height:8px;
                            border-radius:0;
                            border-radius:2px;
                        }

                        .t${id} .swiper-pagination {
                            border-radius:3px;
                        }
                    `;
                }

                /* POSITION */

                if (options.bullet_position === "center") {
                    cssContent += `
                        .t${id} .swiper-pagination {
                            left: 50%;
                            transform: translateX(-50%);
                        }
                    `;
                }

                else if (options.bullet_position === "right") {
                    cssContent += `
                        .t${id} .swiper-pagination {
                            left: 100%;
                            transform: translateX(-100%);
                        }
                    `;
                }

               
                let styleElement = $('#' + styleID);
                if (styleElement.length) {
                    styleElement.html(cssContent);
                } else {
                    $('body').append('<style id="' + styleID + '">' + cssContent + '</style>');
                }

            }

            this.customNav = () => {
                if (!options.cna) {return;}
                $(`.t${options.cnb.Get('id')} > *`).eq(parseInt(options.h) - 1).addClass("dh-active");

                $(`.t${options.cnb.Get('id')} > *`).on("click", function(){
                    $(this).parent().find(">*").removeClass("dh-active");
                    $(this).addClass("dh-active");
                    swiperInstance.slideTo($(this).index());
                });

                swiperInstance.on('slideChange', function (e) {
                    $(`.t${options.cnb.Get('id')} > *`).removeClass("dh-active");
                    $(`.t${options.cnb.Get('id')} > *`).eq(swiperInstance.activeIndex).addClass("dh-active");
                });
            }

            return this;
        },
        
    });
});
} catch (error) { console.log(error); }

try {
mdLibraries.ItemAdd({
    id: 'marquee',
    js: ['https://static.divhunt.com/assets/library/Marquee.js' ],
});

transform.OnReady(function()
{
    transform.ItemAdd({
        id: 'marquee',
        name: 'Marquee Effect',
        options: {
            a: {'label': 'Duration', 'type': 'INPUT', 'value': '10s', 'units': 's,ms'},
            b: {'label': 'Gap', 'type': 'INPUT', 'value': '20px', 'units': 'px,em'},
            b2: {'label': 'Gap (Mobile)', 'type': 'INPUT', 'value': '', 'units': 'px,em'},
            c: {'label': 'Reverse Direction', 'type': 'TOGGLE', 'value': false},
            d: {'label': 'Pause', 'type': 'TOGGLE', 'value': false},
            e: {'label': 'Pause on hover', 'type': 'TOGGLE', 'value': false},
            f: {'label': 'Vertical Marquee', 'type': 'TOGGLE', 'value': false}, // New field for vertical marquee
        },
        code: function(transform, tag, target, options, data, index)
        {  

            this.init = () => {

                let tagId = tag.Get('id');
                let cls = `.t${tagId}`;
                let marquee_id = `marquee-${tagId}`;
                let duration = options.a;
                $("#"+marquee_id).remove();

                if (options.d) {
                    $(target).css("height", "100%");
                    return;
                }

                let contents = $(target).children();
                $(target).empty().append($('<div>').append(contents));

                if (!duration) {
                    duration = '10';
                }

                let direction = "normal";
                if (options.c) {
                    direction = "reverse";
                }

                if(!duration?.includes("s") && !duration?.includes("ms")) {
                    duration = duration+"s";
                }

                const timesToDuplicate = 5; 

                let increasedDuration = duration.endsWith('ms') ?
                    `${parseInt(duration) * timesToDuplicate}ms` :
                    `${parseInt(duration) * timesToDuplicate}s`;

                let gap = options.b;
               
                if(!gap?.includes("px") && !gap?.includes("em")) {
                    gap = gap+"px";
                }  

                let gapMobile = options.b2 ? options.b2 : gap;
                if(!gapMobile?.includes("px") && !gapMobile?.includes("em")) {
                    gapMobile = gapMobile+"px";
                }

                let style;

                if (options.f) { // Vertical marquee
                    style = `
                        <style id="${marquee_id}">
                            ${cls} {
                                overflow: hidden;
                                position: relative;
                                width: 100%;
                                height: 100%;
                            }

                            ${cls} > div {
                                display: block;
                                position: absolute;
                                gap: ${gap};
                            }

                            @media (max-width: 480px) { 
                                ${cls} > div {
                                    gap: ${gapMobile};
                                }
                            }

                            ${cls} > div {
                                animation: plugin_marquee_vertical ${increasedDuration} linear infinite;
                                animation-direction: ${direction};
                                animation-play-state: running;
                            }

                            ${cls}:hover > div {
                                animation-play-state: ${options.e ? 'paused' : 'running'};
                            }

                           
                        </style>
                    `;
                } else { // Horizontal marquee
                    style = `
                        <style id="${marquee_id}">
                            ${cls} {
                                overflow: hidden;
                                position: relative;
                                width: 100%;
                            }

                            ${cls} > div {
                                display: flex;
                                position: absolute;
                                gap:${gap};
                                width: max-content;
                            }

                            @media (max-width: 480px) { 
                                ${cls} > div {
                                    gap:${gapMobile};
                                }
                            }

                            ${cls} > div {
                                animation: plugin_marquee ${increasedDuration} linear infinite;
                                animation-direction: ${direction};
                                animation-play-state: running;
                            }

                            ${cls}:hover > div {
                                animation-play-state: ${options.e ? 'paused' : 'running'};
                            }


                        </style>
                    `;
                }

                /* DUPLICATE ITEMS & PLAY ANIMATION */
                $(target).find(">div").append(function() { return $(this).find(">*").clone(); });
                $(target).find(">div").append(function() { return $(this).find(">*").clone(); });

                $("style#"+marquee_id).remove();
                $("body").append(style);
            }

            return this.init();
        },
    });
});
} catch (error) { console.log(error); }

try {
transform.OnReady(function() {

    this.effects = [
        {value:'none', title: 'None'},
        {value:'fade', title: 'Fade'},
        {value:'slide', title: 'Slide'},
        {value:'slideLeft', title: 'Slide Left'},
        {value:'slideRight', title: 'Slide Right'}
    ];

    transform.ItemAdd({
        id: 'hamburger',
        name: 'Hamburger Menu',
        options: {
            a: {'label': 'Menu ID', 'type': 'INPUT', 'value': ''},
            b: {'label': 'Animation', 'type': 'SELECT', 'values': this.effects, 'value': 'fade'},
            dur: {
                label: 'Duration',
                placeholder: '400',
                type: 'INPUT', 
                units: ['ms'],
                condition: (option, values) =>
                {
                    return values.b === 'slideLeft' || values.b === 'slideRight' 
                }
            },
         
            c: {'label': 'Show', 'type': 'TOGGLE', 'value': false},
            d: {'label': 'Flex on show', 'type': 'TOGGLE', 'value': false},
        },

        code: function(transform, tag, target, options, data, index) {

            this.init = (bind, num) => {
                this.requirements();
                this.render();

                if(data.mode === 'website') {
                    this.click();
                    this.anchorClick();
                }
            };

            this.requirements = () => {
                if(!options.a ) {
                    console.log(`Menu ID is not set.`);
                    return;
                }

                if( !$(`#${options.a}`).length ) {
                    console.log(`Menu with an id: ${options.a} doesn't exist.`);
                    return;
                }
            };

            this.anchorClick = () => { 

                let transform = this;
                $(`#${options.a} a`).on('click', function (e) {
                    console.log("TEST", $(this).attr("href"));
                    var href = $(this).attr('href');
                    if (href && href.startsWith('#')) {
                        if ($(target).is(":visible")) {
                            transform.menuToggle();
                            target.removeClass("dh-active");
                        } 
                    }
                });

            };

            this.render = () => {
                if (options.c ) {
                    target.addClass('dh-active');
                    $(`#${options.a}`).addClass("dh-active");
                    if (options.d) {
                        $(`#${options.a}`).css('display', 'flex');
                        return;
                    }
                    $(`#${options.a}`).show();
                }
            };

            this.click = () => {
                let transform = this;
                $(target).on("click", function(){
                    transform.menuToggle($(this));
                });
            };

            this.menuToggle = (button) => {
                const menuElement = $(`#${options.a}`);
                const displayType = options.d ? 'flex' : null;
                target.toggleClass('dh-active');
                if (options.b === "none") {
                    if (menuElement.is(":visible")) {
                        menuElement.hide().css("display","");
                        target.removeClass("dh-active");
                    } else {
                        menuElement.css('display', displayType || 'block');
                    }
                } else if (options.b === "fade") {
                    if (menuElement.is(":visible")) {
                        menuElement.fadeOut("fast", function(){
                             $(menuElement).css("display","");
                             target.removeClass("dh-active");
                        });
                    } else {
                        menuElement.css('display', displayType || 'block').hide().fadeIn("fast");
                    }
                } else if (options.b === "slide") {
                    if (menuElement.is(":visible")) {
                        menuElement.slideUp("fast",function(){
                            $(menuElement).css("display","");
                        });
                    } else {
                        menuElement.css('display', displayType || 'block').hide().slideDown("fast");
                    }
                } else if (options.b === "slideLeft") {
                    this.slideLeftToggle(menuElement, options.dur, displayType);
                } else if (options.b === "slideRight") {
                    this.slideRightToggle(menuElement, options.dur, displayType);
                }
            }



            this.slideLeftToggle = function(element, duration, displayType) {
                duration = (duration.match(/\d+/) ? parseInt(duration.match(/\d+/)[0], 10) : 400);
            
                element.css('transition', `transform ${duration}ms linear`);

                if (element.is(":visible")) {
                    element.css('transform', 'translateX(-100%)');
                    setTimeout(function() {
                        element.hide().css("display","");
                        element.css('transform', ''); 
                    }, duration); 
                } else {
                    element.css({
                        'transform': 'translateX(-100%)',
                        'display': displayType || 'block'
                    });
                    setTimeout(function() {
                        element.css('transform', 'translateX(0)');
                    }, 1); 
                }
            };

            this.slideRightToggle = function(element, duration, displayType) {

                duration = (duration.match(/\d+/) ? parseInt(duration.match(/\d+/)[0], 10) : 400);
                element.css('transition', `transform ${duration}ms linear`);

    
                if (element.is(":visible")) {
                    element.css('transform', 'translateX(100%)');
                    setTimeout(function() {
                        element.hide().css("display","");
                        element.css('transform', ''); 
                    }, duration); 
                } else {
                    element.css({
                        'transform': 'translateX(100%)',
                        'display': displayType || 'block'
                    });
                    setTimeout(function() {
                        element.css('transform', 'translateX(0)');
                    }, 1); 
                }
            };





            return this;
        }
    });
});

} catch (error) { console.log(error); }

try {
transform.OnReady(function()
{
    transform.ItemAdd({
        id: 'accordions',
        name: 'Accordions',
        options: {
            b: {'label': 'Duration (ms)', 'type': 'INPUT', 'value': 200},
            a: {'label': 'Start Open', 'type': 'INPUT', 'value': '', 
                condition: (option, values) => {
                    return !values.d;
                }
            },
            d: {'label': 'Open All', 'type': 'TOGGLE', 'value': false},
            c: {
                'label': 'Single mode', 'type': 'TOGGLE', 'value': true,                 
                condition: (option, values) => {
                    return !(values.d || (values.a && (values.a === "*" || values.a.toLowerCase() === "all")) || (values.a && values.a.split(",").length > 1));
                }
            },
        },
        code: function(transform, tag, target, options, data, index)
        {
            this.init = (bind, num) =>
            {
                this.requirements();
                this.render();

                if(data.mode === 'website')
                {
                    this.click();
                }
            };

            this.requirements = () =>
            {
                target.children().each(function (){
                    if($(this).children().length !== 2)
                    {
                        console.log(`"${tag.Get('label')}" - Each accordion must have only 2 children.`);
                    }
                });
            };

            this.render = () =>
            {
                let opened = options.a?.split(",");
                
                if (opened.length > 1) {options.c = false;} 
                if ( options.a === "*" || options.a.toLowerCase() === "all" || options.d ) {
                    target.children().addClass('dh-active');
                    target.children().children().addClass('dh-active');
                    options.c = false;
                    return;
                }

                target.children().find(">*:last-child").hide();

                if (!options.a) {return;}

                $.each(opened, function(ind, key){
                    target.children().eq(parseInt(key) - 1).addClass('dh-active');
                    target.children().eq(parseInt(key) - 1).children().addClass('dh-active');
                    target.children().eq(parseInt(key) - 1).children().last().show();
                });
            };

            this.click = () =>
            {
                let transform = this;
                
                $(target).find(">*").find(">*:first-child").on("click", function(){
                    transform.toggle($(this).parent());
                });
            };

            this.toggle = (target) => {
                let was_opened = $(target).hasClass("dh-active");

                /* Hide others if single mode */
                if (options.c) {
                    target.parent().children().removeClass("dh-active");
                    target.parent().children().children().removeClass("dh-active");
                    target.parent().children().find(">*:last-child").slideUp(options.b);
                }

                /* Open target */
                if (was_opened) {
                    target.removeClass('dh-active');
                    target.children().removeClass('dh-active');
                    target.children().last().slideUp(options.b);
                } else {
                    target.addClass('dh-active');
                    target.children().addClass('dh-active');
                    target.children().last().slideDown(options.b);
                }
            }
            
            return this;
        }
    });
});
} catch (error) { console.log(error); }

try {
mdLibraries.ItemAdd({
    id: 'pagination.js',
    css: ['https://static.divhunt.com/assets/library/Pagination.css'],
    js: ['https://static.divhunt.com/assets/library/Pagination.js'],
});

transform.OnReady(() =>
{
    transform.ItemAdd({
        id: 'paginationjs',
        name: 'Pagination',
        options: {
            a: {'label': 'Items Per Page', 'type': 'INPUT', 'value': 5},
            b: {'label': 'Current Page', 'type': 'INPUT', 'value': 1},
            d: {'label': 'Show Previous', 'type': 'TOGGLE', 'value': false},
            e: {'label': 'Show Next', 'type': 'TOGGLE', 'value': false},
            f: {'label': 'Auto Hide Previous', 'type': 'TOGGLE', 'value': false, condition: (option, options) => 
            {
                return options.d;
            }},
            g: {'label': 'Auto Hide Next', 'type': 'TOGGLE', 'value': false, condition: (option, options) => 
            {
                return options.e;
            }},
            h: {'label': 'Show Page Numbers', 'type': 'TOGGLE', 'value': true},
            i: {'label': 'Show Navigator', 'type': 'TOGGLE', 'value': false},
            j: {'label': 'Animation', 'type': 'SELECT', 'value': 'none', 'values': mdAnimations.Fn('list', 'in')},
            ascroll: {'label': 'Scroll to top on change', 'type': 'TOGGLE', 'value': true},
            ascroll_offset: {'label': 'Scroll offset (px)', 'type': 'INPUT', 'value': 0, condition: (option, options) => 
            {
                return options.ascroll;
            }},
            ascroll_time: {'label': 'Scroll duration (ms)', 'type': 'INPUT', 'value': 200, condition: (option, options) => 
            {
                return options.ascroll;
            }},
            sa: {'label': 'Background', 'type': 'COLOR', 'value': '#FFF', 'group': "Styles"},
            sb: {'label': 'Color', 'type': 'COLOR', 'value': '#000', 'group': "Styles"},
            sc: {'label': 'Active Background', 'type': 'COLOR', 'value': '#AAAAAA', 'group': "Styles"},
            sd: {'label': 'Active Color', 'type': 'COLOR', 'value': '#FFF', 'group': "Styles"},
            se: {'label': 'Border Color', 'type': 'COLOR', 'value': '#ebebeb', 'group': "Styles"},
        },

        code: function(transform, tag, target, options, data, index)
        {
            this.init = () => 
            {   
                let dom = this.dom(target);

                if(!dom)
                {
                    return mdBugs.ItemAdd({
                        message: `Invalid structure for transform "${transform.Get('id')}" on tag "${tag.Get('label')}". Tag must have 2 children (div) that will hold items and pagination.`,
                        modal: true
                    });
                }

                /* Add Styles */
                this.styles(tag, target);

                /* Get Items */
                let items = this.items(dom);
                
                /* Initiate Pagination */
                let paginationInitialized = false;

                mdLibraries.Fn('load', ['pagination.js'], () => {
                    dom.pagination.pagination({
                        dataSource: items,
                        pageSize: options.a,
                        pageNumber: options.b,
                        showPrevious: options.d,
                        showNext: options.e,
                        autoHidePrevious: options.f,
                        autoHideNext: options.g,
                        showPageNumbers: options.h,
                        showNavigator: options.i,
                        prevText: '‹',
                        nextText: '›',
                        callback: function(data, pagination) {
                            dom.items.html(data.join(''));

                            if (options.j !== 'none') {
                                mdAnimations.Fn('run', options.j, dom.items.find(">*"), 250);
                            }

                            // Only animate scroll if the pagination has been initialized (not on initial load)
                            if (paginationInitialized && options.ascroll) {
                                $('html, body').animate({
                                    scrollTop: $(target).offset().top - options.ascroll_offset
                                }, options.ascroll_time);
                            }

                            // Set the initialized flag to true after the first callback execution
                            paginationInitialized = true;
                        }
                    });
                });

            }
            
            /* Get Items & Pagination Child Elements */
            this.dom = (target) =>
            {
                let dom = {
                    items: target.find('>div').eq(0), 
                    pagination: target.find('>div').eq(1)
                };

                if(!dom.items.length || !dom.pagination.length)
                {
                    return false;
                }

                return dom;
            };

            /* Extract Items HTML */
            this.items = (dom) =>
            {
                let items = [];
                
                $.each(dom.items.find('>*'), function()
                {
                    items.push($(this)[0].outerHTML);
                    $(this).remove();
                });

                return items;
            };

            /* Push Styles to Target */
            this.styles = (tag, target) => 
            {
                let css = `
                    .t${tag.Get('id')} .paginationjs .paginationjs-pages li > a 
                    {
                        background: ${options.sa};
                        color: ${options.sb};
                    }

                    .t${tag.Get('id')} .paginationjs .paginationjs-pages li.active>a 
                    {
                        background: ${options.sc};
                        color: ${options.sd};
                    }

                    .t${tag.Get('id')} .paginationjs .paginationjs-pages ul 
                    {
                        background: ${options.se};
                        border: 1px solid ${options.se};
                    }
                `;
 
                target.append(`<style>${css}</style>`);
            };

            return this.init(); 
        }
    });
});
} catch (error) { console.log(error); }


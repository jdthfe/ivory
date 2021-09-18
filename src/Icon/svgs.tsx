const svgs = {
    addCircle:
        '<svg viewBox="0 0 102.09 102.09"><defs/><g id="icon"><circle cx="51.05" cy="51.05" r="51.05"/><path d="M48.55 19.45h4.99v63.18h-4.99z" class="cls-2"/><path d="M48.55 19.45h4.99v63.18h-4.99z" class="cls-2" transform="rotate(90 51.045 51.045)"/></g></svg>',
    alert:
        '<svg class="icon" viewBox="0 0 1024 1024"><defs/><path d="M542.72 706.56c0 17.408-13.312 30.72-30.72 30.72s-30.72-13.312-30.72-30.72 13.312-30.72 30.72-30.72 30.72 13.312 30.72 30.72zM512 286.72c-17.408 0-30.72 13.312-30.72 30.72V614.4c0 16.384 13.312 30.72 30.72 30.72s30.72-13.312 30.72-30.72V317.44c0-16.384-13.312-30.72-30.72-30.72zM972.8 512c0 253.952-206.848 460.8-460.8 460.8S51.2 765.952 51.2 512 258.048 51.2 512 51.2 972.8 258.048 972.8 512zm-40.96 0c0-231.424-188.416-419.84-419.84-419.84S92.16 280.576 92.16 512 280.576 931.84 512 931.84 931.84 743.424 931.84 512z"/></svg>',
    arrow:
        '<svg viewBox="0 0 1024 1024"><path fill-rule="evenodd" d="M368.4 511.9l272.2 272.2c10 10 10 26.2 0 36.2-10 10-26.2 10-36.2 0L314.8 530.6c-5.2-5.2-7.7-12-7.5-18.7-.2-6.8 2.3-13.6 7.5-18.7l289.7-289.7c10-10 26.2-10 36.2 0 10 10 10 26.2 0 36.2L368.4 511.9z" clip-rule="evenodd"/></svg>',
    check:
        '<svg class="icon" viewBox="0 0 1024 1024"><defs/><path d="M912.444 308.326c-3.452 0-3.452 3.452 0 0l-393.54 393.54c-13.808 13.808-34.52 13.808-48.33 0l-245.098-245.1c-13.809-13.808-13.809-34.52 0-48.33 13.808-13.807 34.52-13.807 48.329 0l220.934 220.935L860.662 263.45c3.452-3.452 10.357-6.905 17.26-10.357C798.525 139.173 663.893 63.227 512 63.227 263.449 63.227 63.227 263.449 63.227 512S263.449 960.773 512 960.773 960.773 760.551 960.773 512c0-72.494-17.26-141.536-48.33-203.674z"/></svg>',
    close:
        '<svg id="图层_1" x="0" y="0" version="1.1" viewBox="0 0 1024 1024" xml:space="preserve"><path d="M785.7 784.9c-16.7 16.7-43.7 16.7-60.3 0-70.5-70.5-141-141-211.6-211.5L302.3 784.9c-16.7 16.7-43.7 16.7-60.3 0-16.7-16.6-16.7-43.7 0-60.3l211.5-211.5c-70.5-70.5-141-141-211.5-211.6-16.7-16.6-16.7-43.7 0-60.3 16.7-16.7 43.7-16.7 60.3 0l483.4 483.4c16.7 16.6 16.7 43.6 0 60.3zM725.4 241.1c16.7-16.7 43.7-16.7 60.3 0 16.7 16.7 16.7 43.7 0 60.3L672 415.1c-16.7 16.7-43.7 16.7-60.3 0-16.7-16.6-16.7-43.7 0-60.3l113.7-113.7z" class="st0"/></svg>',
    closeFilled:
        '<svg class="icon" viewBox="0 0 1024 1024"><defs/><path d="M512.001 15.678C237.414 15.678 14.82 238.273 14.82 512.86S237.414 1010.04 512 1010.04s497.18-222.593 497.18-497.18S786.589 15.678 512.002 15.678zm213.211 645.937c17.798 17.803 17.798 46.657 0 64.456-17.798 17.797-46.658 17.797-64.456 0L512.001 577.315 363.241 726.07c-17.799 17.797-46.652 17.797-64.45 0-17.804-17.799-17.804-46.653 0-64.456L447.545 512.86 298.79 364.104c-17.803-17.798-17.803-46.657 0-64.455 17.799-17.798 46.652-17.798 64.45 0l148.761 148.755 148.755-148.755c17.798-17.798 46.658-17.798 64.456 0 17.798 17.798 17.798 46.657 0 64.455L576.456 512.86l148.756 148.755zm0 0"/></svg>',
    current:
        '<svg class="icon" viewBox="0 0 1024 1024"><defs/><path d="M512 10.18c-276.965 0-501.492 225.086-501.492 502.742S235.035 1015.665 512 1015.665s501.492-225.086 501.492-502.743S788.965 10.18 512 10.18zm263.69 359.265L442.761 736.657a40.96 40.96 0 0 1-59.343 1.418L225.02 579.283c-15.977-16.015-15.944-41.951.072-57.928 16.015-15.97 41.949-15.943 57.925.072L411 649.728l304.003-335.307c15.196-16.759 41.1-18.026 57.856-2.832 16.759 15.194 18.028 41.097 2.832 57.856z"/></svg>',
    delete:
        '<svg class="icon" viewBox="0 0 1024 1024"><path d="M880 240H704v-64c0-52.8-43.2-96-96-96H416c-52.8 0-96 43.2-96 96v64H144c-17.6 0-32 14.4-32 32s14.4 32 32 32h48v512c0 70.4 57.6 128 128 128h384c70.4 0 128-57.6 128-128V304h48c17.6 0 32-14.4 32-32s-14.4-32-32-32zm-496-64c0-17.6 14.4-32 32-32h192c17.6 0 32 14.4 32 32v64H384v-64zm384 640c0 35.2-28.8 64-64 64H320c-35.2 0-64-28.8-64-64V304h512v512z"/><path d="M416 432c-17.6 0-32 14.4-32 32v256c0 17.6 14.4 32 32 32s32-14.4 32-32V464c0-17.6-14.4-32-32-32zm192 0c-17.6 0-32 14.4-32 32v256c0 17.6 14.4 32 32 32s32-14.4 32-32V464c0-17.6-14.4-32-32-32z"/></svg>',
    download:
        '<svg viewBox="0 0 25 22"><g fill-rule="evenodd"><path d="M22.992 22H1.284C.576 22 0 21.393 0 20.647v-9.774c0-.558.418-1.01.934-1.01.515 0 .933.452.933 1.01v9.105h20.541v-9.076c0-.559.418-1.011.934-1.011s.934.452.934 1.01v9.746c0 .746-.576 1.353-1.284 1.353z"/><path d="M12.125.006c-.558 0-1.01.354-1.01.792v12.66c0 .438.452.792 1.01.792s1.01-.354 1.01-.791V.798c0-.438-.452-.792-1.01-.792z"/><path d="M5.448 7.703c-.255 0-.51.096-.707.29a1.02 1.02 0 0 0-.015 1.437l6.677 6.864c.39.401 1.03.408 1.429.015a1.02 1.02 0 0 0 .015-1.437L6.17 8.008a1.004 1.004 0 0 0-.722-.305z"/><path d="M18.85 7.703c-.262 0-.524.102-.722.305l-6.677 6.864a1.02 1.02 0 0 0 .015 1.437 1.006 1.006 0 0 0 1.429-.015l6.677-6.864a1.02 1.02 0 0 0-.015-1.437 1.004 1.004 0 0 0-.707-.29z"/></g></svg>',
    edit:
        '<svg class="icon" viewBox="0 0 1025 1024"><path d="M960.341 961.534c0 17.875-12.503 32.454-28.013 32.454H91.86c-15.377 0-27.883-14.579-27.883-32.454 0-18.003 12.506-32.454 27.883-32.454h840.467c15.51 0 28.013 14.45 28.013 32.454zM855.486 272.739c-12.381 12.615-32.764 12.615-45.265 0L674.54 135.118c-12.441-12.61-12.441-33.278 0-45.89l45.265-45.96c12.383-12.616 32.764-12.616 45.27 0L900.882 180.95c12.379 12.68 12.379 33.34 0 45.894l-45.396 45.894zM357.66 777.576c-12.382 12.551-32.766 12.551-45.267 0l-135.87-137.619c-12.441-12.615-12.441-33.281-.062-45.892L583.94 180.95c12.44-12.55 32.826-12.55 45.266 0l135.744 137.682c12.507 12.68 12.507 33.345 0 45.896l-407.29 413.047zM131.189 685.85c-12.438-12.611-25.445-8.617-28.882 8.876L69.543 860.618c-3.44 17.495 7.879 28.905 25.136 25.42l163.565-33.092c17.257-3.487 21.129-16.67 8.753-29.35L131.19 685.85z"/></svg>',
    eyeClose:
        '<svg class="icon" viewBox="0 0 1024 1024"><defs/><path d="M941.677 391.71c9.338-14.006 6.225-32.681-6.225-43.575-14.006-10.894-32.681-7.781-43.575 6.225-1.557 1.556-174.3 205.426-379.728 205.426-199.2 0-379.727-205.426-381.283-206.982-10.895-12.45-31.125-14.006-43.576-3.113-12.45 10.894-14.006 31.125-3.113 43.576 3.113 4.668 40.463 46.687 99.6 93.375l-79.37 82.482c-12.45 12.45-10.893 32.681 1.557 43.575 3.113 6.225 10.894 9.338 18.676 9.338 7.78 0 15.562-3.113 21.787-9.338l85.594-88.706c40.463 28.013 88.707 54.47 141.62 73.144l-32.682 110.495c-4.668 17.118 4.67 34.237 21.788 38.906h9.337c14.006 0 26.457-9.338 29.569-23.344l32.681-110.495c24.9 4.669 51.357 7.782 77.813 7.782s52.913-3.113 77.814-7.782l32.68 108.939c3.114 14.006 17.12 23.343 29.57 23.343 3.113 0 6.225 0 7.782-1.556 17.118-4.67 26.456-21.787 21.788-38.906L649.099 595.58c52.914-18.676 101.157-45.132 141.62-73.144l84.038 87.15c6.225 6.225 14.006 9.338 21.787 9.338 7.781 0 15.563-3.113 21.787-9.337 12.45-12.451 12.45-31.125 1.557-43.576l-79.37-82.481c63.808-46.689 101.16-91.82 101.16-91.82z"/></svg>',
    eyeOpen:
        '<svg class="icon" viewBox="0 0 1024 1024"><defs/><path d="M512 352c-89.6 0-160 70.4-160 160s70.4 160 160 160 160-70.4 160-160-70.4-160-160-160zm0 256c-54.4 0-96-41.6-96-96s41.6-96 96-96 96 41.6 96 96-41.6 96-96 96z"/><path d="M956.8 499.2C886.4 320 697.6 192 512 192c-214.4 0-358.4 166.4-444.8 304-6.4 9.6-6.4 22.4 0 32C153.6 665.6 297.6 832 512 832c185.6 0 374.4-128 444.8-307.2 3.2-9.6 3.2-16 0-25.6zM512 768c-176 0-300.8-134.4-377.6-256C211.2 390.4 336 256 512 256c153.6 0 316.8 108.8 380.8 256-64 147.2-227.2 256-380.8 256z"/></svg>',
    loading:
        '<svg class="icon" viewBox="0 0 1024 1024"><defs/><path d="M393.665 495.525c0 11.307-9.169 20.466-20.466 20.466H269.528c-11.308 0-20.467-9.159-20.467-20.466 0-11.298 9.16-20.466 20.467-20.466h103.67c11.298 0 20.467 9.168 20.467 20.466zM805.208 495.525c0 11.307-9.159 20.466-20.466 20.466H681.07c-11.298 0-20.466-9.159-20.466-20.466 0-11.298 9.168-20.466 20.466-20.466h103.67c11.308 0 20.467 9.168 20.467 20.466zM547.6 237.918v103.67c0 11.308-9.158 20.467-20.465 20.467s-20.466-9.159-20.466-20.466V237.918c0-11.308 9.158-20.466 20.466-20.466 11.307 0 20.466 9.158 20.466 20.466zM547.6 649.46v103.682c0 11.297-9.158 20.466-20.465 20.466s-20.466-9.169-20.466-20.466V649.461c0-11.298 9.158-20.466 20.466-20.466 11.307 0 20.466 9.168 20.466 20.466zM411.562 428.754c-3.786 6.57-10.673 10.233-17.733 10.233-3.48 0-7-.88-10.223-2.742l-89.775-51.862c-9.783-5.658-13.129-18.173-7.48-27.956 5.659-9.793 18.174-13.14 27.956-7.49l89.775 51.86c9.783 5.66 13.14 18.174 7.48 27.957zM767.919 634.633c-3.797 6.56-10.673 10.233-17.744 10.233-3.47 0-6.99-.89-10.213-2.753l-89.775-51.86c-9.783-5.65-13.139-18.175-7.48-27.958 5.649-9.793 18.174-13.139 27.957-7.48l89.774 51.861c9.783 5.649 13.13 18.174 7.48 27.957zM673.723 282.708l-51.86 89.764c-3.787 6.56-10.674 10.233-17.745 10.233-3.469 0-6.99-.89-10.213-2.752-9.793-5.65-13.139-18.164-7.48-27.957l51.861-89.765c5.649-9.793 18.164-13.139 27.957-7.49 9.783 5.659 13.14 18.174 7.48 27.967zM467.855 639.054l-51.862 89.774c-3.796 6.56-10.673 10.233-17.744 10.233-3.479 0-7-.89-10.223-2.752-9.782-5.66-13.139-18.174-7.48-27.957l51.861-89.775c5.66-9.782 18.174-13.129 27.957-7.48 9.793 5.659 13.14 18.174 7.49 27.957zM460.436 379.912a20.293 20.293 0 0 1-10.203 2.742c-7.081 0-13.958-3.674-17.744-10.243l-51.81-89.795c-5.649-9.793-2.292-22.308 7.501-27.957 9.793-5.649 22.308-2.292 27.957 7.5l51.8 89.796c5.648 9.793 2.292 22.308-7.501 27.957zM666.09 736.4a20.462 20.462 0 0 1-10.213 2.743c-7.071 0-13.958-3.673-17.744-10.243l-51.8-89.805c-5.649-9.793-2.292-22.308 7.5-27.957 9.784-5.649 22.299-2.282 27.947 7.5l51.81 89.806c5.649 9.793 2.292 22.308-7.5 27.957zM760.5 384.527l-89.795 51.81a20.462 20.462 0 0 1-10.213 2.742c-7.071 0-13.958-3.673-17.744-10.243-5.649-9.793-2.292-22.308 7.5-27.957l89.806-51.81c9.783-5.638 22.298-2.282 27.947 7.501 5.648 9.793 2.292 22.308-7.501 27.957zM404.02 590.18l-89.805 51.8a20.293 20.293 0 0 1-10.202 2.743c-7.081 0-13.958-3.674-17.744-10.243-5.649-9.794-2.292-22.309 7.5-27.957l89.796-51.8c9.793-5.649 22.308-2.292 27.957 7.5s2.292 22.309-7.501 27.958z"/></svg>',
    more:
        '<svg id="图层_1" x="0" y="0" version="1.1" viewBox="0 0 1024 1024" xml:space="preserve"><circle cx="793.5" cy="520.5" r="59.7" class="st0"/><circle cx="520.5" cy="520.5" r="59.7" class="st0"/><circle cx="247.4" cy="520.5" r="59.7" class="st0"/></svg>',
    plus:
        '<svg class="icon" viewBox="0 0 1024 1024"><defs/><path d="M896 544H128c-17.6 0-32-14.4-32-32s14.4-32 32-32h768c17.6 0 32 14.4 32 32s-14.4 32-32 32zM512 928c-17.6 0-32-14.4-32-32V128c0-17.6 14.4-32 32-32s32 14.4 32 32v768c0 17.6-14.4 32-32 32z"/></svg>',
    pwd:
        '<svg class="icon" viewBox="0 0 1024 1024"><defs/><path d="M792.241 483.333l84.29 122.162c14.246 20.646 9.057 48.932-11.59 63.178-20.646 14.245-48.931 9.056-63.177-11.59l-96.235-139.475c-46.873 14.454-96.675 23.726-148.11 27.177V711.13c0 25.084-20.335 45.418-45.419 45.418-25.084 0-45.419-20.334-45.419-45.418V544.785c-51.435-3.451-101.237-12.723-148.11-27.177l-96.235 139.475c-14.246 20.646-42.531 25.835-63.177 11.59-20.647-14.246-25.836-42.532-11.59-63.178l84.29-122.162c-71.278-34.968-132-83.323-176.087-142.072-15.055-20.064-10.996-48.533 9.067-63.589 20.064-15.055 48.533-10.996 63.589 9.067C205.442 389.502 350.61 455.466 512 455.466c161.39 0 306.558-65.964 383.672-168.727 15.056-20.063 43.525-24.122 63.589-9.067 20.063 15.056 24.122 43.525 9.067 63.589-44.087 58.75-104.809 107.104-176.087 142.072z"/></svg>',
    pwdOpen:
        '<svg class="icon" viewBox="0 0 1024 1024"><defs/><path d="M512 279.273c171.985 0 328.61 162.909 388.422 232.727C840.61 581.818 683.985 744.727 512 744.727S183.39 581.818 123.578 512C183.39 442.182 340.015 279.273 512 279.273m0-69.818c-213.41 0-394.24 198.516-455.215 273.92a44.916 44.916 0 0 0 0 57.25C117.76 616.03 298.59 814.545 512 814.545s394.24-198.516 455.215-273.92a44.916 44.916 0 0 0 0-57.25C906.24 407.97 725.41 209.455 512 209.455z"/><path d="M512 442.182A69.818 69.818 0 1 1 442.182 512 69.818 69.818 0 0 1 512 442.182m0-69.818A139.636 139.636 0 1 0 651.636 512 139.636 139.636 0 0 0 512 372.364z"/></svg>',
    rarrow:
        '<svg class="icon" viewBox="0 0 1024 1024"><defs/><path d="M647.763 490.982c12.499-12.499 32.755-12.499 45.253 0 12.499 12.499 12.499 32.755 0 45.253L376.235 853.016c-12.499 12.499-32.755 12.499-45.253 0-12.499-12.499-12.499-32.755 0-45.253l316.781-316.781z"/><path d="M330.982 216.237c-12.499-12.499-12.499-32.755 0-45.253 12.499-12.499 32.755-12.499 45.253 0l316.781 316.781c12.499 12.499 12.499 32.755 0 45.253-12.499 12.499-32.755 12.499-45.253 0L330.982 216.237z"/></svg>',
    remind:
        '<svg viewBox="0 0 1024 1024"><path d="M513.3 964.8c-54.9 0-113.6-14.9-113.6-56.8 0-15.7 12.7-28.4 28.4-28.4 12.3 0 22.7 7.8 26.7 18.7 7.8 4 28.9 9.7 58.5 9.7 29.5 0 50.6-5.7 58.5-9.7 4-10.9 14.4-18.7 26.7-18.7 15.7 0 28.4 12.7 28.4 28.4-.1 41.9-58.7 56.8-113.6 56.8z"/><path fill-rule="evenodd" d="M901.5 721.6l-76.6-110.5-.2-203.4c-.1-131.4-75-242.9-201.6-285.3-20.1-38.8-62.8-65.9-112.6-65.9-49.8.1-92.4 27.2-112.4 66.1C271.7 165.3 201.4 277 201.5 408.4l.2 202.7-76.4 110.5c-8.9 12.9-5.7 30.6 7.2 39.5 4.7 3.3 10.4 5 16.1 5h729.5c15.7 0 28.4-12.7 28.4-28.4.1-5.7-1.7-11.4-5-16.1zm-697.7-13.2l55.7-80.6-.3-220.5c-.1-111.8 58.9-198.5 158-231.9l21.8-7.3 10.5-20.5c11-21.4 35.4-35.3 62-35.3h.1c26.6 0 51 13.8 62.1 35.2l10.6 20.4 21.8 7.3c100.3 33.6 162.7 122.3 162.8 231.6l.2 221.1 55.8 80.5H203.8z" clip-rule="evenodd"/></svg>',
    selected:
        '<svg viewBox="0 0 1024 1024"><path fill-rule="evenodd" d="M409.6 615.1l-256-204.8L51.2 512.7l358.4 356.6L972.8 308 870.4 205.5z" clip-rule="evenodd"/></svg>',
    share:
        '<svg viewBox="0 0 27 22"><g fill-rule="evenodd"><path fill-rule="nonzero" d="M26.395 6.367l-8.19 6.6V8.174c-6.178-1.804-12.622 6.526-12.622 6.526C7.69 4.006 18.286 5.032 18.286 5.032V0l8.11 6.367z"/><path d="M25.004 22H1.396C.626 22 0 21.34 0 20.529v-6.23c0-.607.455-1.099 1.015-1.099.561 0 1.016.492 1.016 1.1V19.8h22.338v-5.47c0-.608.455-1.1 1.016-1.1.56 0 1.015.492 1.015 1.1v6.198c0 .811-.626 1.471-1.396 1.471z"/></g></svg>',
    successful:
        '<svg class="icon" viewBox="0 0 1024 1024"><defs/><path d="M508.249 953.897c-60.083 0-118.382-11.772-173.276-34.992-53.01-22.42-100.612-54.513-141.484-95.385-40.873-40.873-72.965-88.475-95.387-141.485-23.218-54.895-34.99-113.193-34.99-173.276s11.773-118.381 34.99-173.275c22.422-53.01 54.514-100.613 95.387-141.485 40.872-40.872 88.475-72.964 141.484-95.386 54.895-23.219 113.194-34.991 173.276-34.991 60.082 0 118.38 11.773 173.275 34.99 53.01 22.423 100.611 54.515 141.484 95.387 40.872 40.872 72.965 88.475 95.386 141.485 23.219 54.895 34.992 113.194 34.992 173.275s-11.773 118.381-34.992 173.276c-22.42 53.01-54.514 100.612-95.386 141.485-40.873 40.872-88.475 72.965-141.484 95.385-54.895 23.22-113.193 34.992-173.275 34.992zm0-839.844c-217.642 0-394.707 177.064-394.707 394.706 0 217.643 177.065 394.707 394.707 394.707s394.705-177.064 394.705-394.707c.001-217.642-177.064-394.706-394.705-394.706z"/><path d="M448.494 738.907a25.485 25.485 0 0 1-16.625-6.148l-180.932-154.87c-10.733-9.188-11.987-25.336-2.8-36.07 9.189-10.732 25.337-11.988 36.072-2.799l161.572 138.298 272.515-315.904c9.229-10.7 25.385-11.89 36.082-2.66 10.698 9.229 11.889 25.383 2.66 36.082L467.877 730.035c-5.058 5.863-12.2 8.872-19.382 8.872z"/></svg>',
    time:
        '<svg class="icon" viewBox="0 0 1024 1024"><defs/><path d="M511.997 9.749C234.609 9.749 9.749 234.611 9.749 512.003c0 277.388 224.86 502.248 502.248 502.248s502.254-224.86 502.254-502.248c0-277.387-224.866-502.254-502.254-502.254zm170.846 693.012l-17.755 17.76c-9.809 9.802-25.709 9.802-35.516 0l-162.86-162.866c-5.632-5.625-4.937-16.94-4.937-28.078V210.65c0-13.87 11.243-25.111 25.111-25.111h25.11c13.87 0 25.112 11.243 25.112 25.11V521.51l145.735 145.735c9.808 9.807 9.808 25.708 0 35.516zm0 0"/></svg>',
    tip:
        '<svg class="icon" viewBox="0 0 1024 1024"><defs/><path d="M512 958.017C266.08 958.017 65.983 757.952 65.983 512 65.983 266.08 266.08 65.983 512 65.983c245.952 0 446.017 200.065 446.017 446.017S757.952 958.017 512 958.017zm0-828.034c-210.656 0-382.017 171.36-382.017 382.017 0 210.625 171.36 382.017 382.017 382.017 210.625 0 382.017-171.36 382.017-382.017S722.625 129.983 512 129.983z"/><path d="M464 304c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48-48 21.49-48 48zM512 768c-17.665 0-32-14.303-32-32V448c0-17.665 14.335-32 32-32s32 14.335 32 32v288c0 17.697-14.335 32-32 32z"/></svg>',
    uncheck:
        '<svg class="icon" viewBox="0 0 1024 1024"><defs/><path d="M512 935.53a423.53 423.53 0 1 1 0-847.06 423.53 423.53 0 0 1 0 847.06zm0-52.942a370.588 370.588 0 1 0 0-741.176 370.588 370.588 0 0 0 0 741.176z"/></svg>',
};
export default svgs;

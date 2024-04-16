// bg svg
import bg_left from "./bg-key/left.svg?url"
import bg_right from "./bg-key/right.svg?url"
import bg_space from "./bg-key/space.svg?url"

// bottom svg
import bottom_shift from "./bottom-key/shift.svg?url"
import bottom_space from "./bottom-key/space.svg?url"
import bottom_sym from "./bottom-key/sym.svg?url"

// normal svg
import normal_alt from "./normal-key/alt.svg?url"
import normal_backspace from "./normal-key/backspace.svg?url"
import normal_enter from "./normal-key/enter.svg?url"

// function key svg
import function_9900_back from "./function-key/9900/back.svg?url"
import function_9900_blackberry from "./function-key/9900/blackberry.svg?url"
import function_9900_call from "./function-key/9900/call.svg?url"
import function_9900_hang_up from "./function-key/9900/hang_up.svg?url"

import function_q20_back from "./function-key/q20/back.svg?url"
import function_q20_blackberry from "./function-key/q20/blackberry.svg?url"
import function_q20_call from "./function-key/q20/call.svg?url"
import function_q20_hang_up from "./function-key/q20/hang_up.svg?url"



// tab icons
import tab_invitation from "./tab/invitation.svg?url"
import tab_add from "./tab/add.svg?url"
import tab_back from "./tab/back.svg?url"
import tab_close from "./tab/close.svg?url"
import tab_delete from "./tab/delete.svg?url"
import tab_done from "./tab/done.svg?url"
import tab_done_saved from "./tab/done_saved.svg?url"
import tab_done_changed from "./tab/done_changed.svg?url"
import tab_edit from "./tab/edit.svg?url"
import tab_menu from "./tab/menu.svg?url"
import tab_recover from "./tab/recover.svg?url"
import tab_search from "./tab/search.svg?url"
import tab_bill from "./tab/bill.svg?url"
import tab_bill_simple from "./tab/bill_simple.svg?url"
import tab_card from "./tab/card.svg?url"
import tab_share from "./tab/share.svg?url"
import tab_eye_close from "./tab/eye_close.svg?url"
import tab_eye_open from "./tab/eye_open.svg?url"
import tab_list_simple from "./tab/list_simple.svg?url"
import tab_list_detail from "./tab/list_detail.svg?url"
import tab_statistics from "./tab/statistics.svg?url"
import tab_key from "./tab/key.svg?url"
import tab_folder from "./tab/folder.svg?url"
import tab_todo from "./tab/todo.svg?url"
import tab_todo_active from "./tab/todo_active.svg?url"
import tab_others from "./tab/others.svg?url"
import tab_category from "./tab/category.svg?url"
import tab_year from "./tab/year.svg?url"
import tab_about from "./tab/about.svg?url"


import tab_invitation_black from "./tab/invitation_black.svg?url"
import tab_add_black from "./tab/add_black.svg?url"
import tab_back_black from "./tab/back_black.svg?url"
import tab_close_black from "./tab/close_black.svg?url"
import tab_delete_black from "./tab/delete_black.svg?url"
import tab_done_black from "./tab/done_black.svg?url"
import tab_edit_black from "./tab/edit_black.svg?url"
import tab_menu_black from "./tab/menu_black.svg?url"
import tab_recover_black from "./tab/recover_black.svg?url"
import tab_search_black from "./tab/search_black.svg?url"
import tab_bill_black from "./tab/bill_black.svg?url"
import tab_bill_simple_black from "./tab/bill_simple_black.svg?url"
import tab_card_black from "./tab/card_black.svg?url"
import tab_share_black from "./tab/share_black.svg?url"
import tab_eye_close_black from "./tab/eye_close_black.svg?url"
import tab_eye_open_black from "./tab/eye_open_black.svg?url"
import tab_list_simple_black from "./tab/list_simple_black.svg?url"
import tab_list_detail_black from "./tab/list_detail_black.svg?url"
import tab_statistics_black from "./tab/statistics_black.svg?url"
import tab_key_black from "./tab/key_black.svg?url"
import tab_folder_black from "./tab/folder_black.svg?url"
import tab_todo_black from "./tab/todo_black.svg?url"
import tab_todo_active_black from "./tab/todo_active_black.svg?url"
import tab_others_black from "./tab/others_black.svg?url"
import tab_category_black from "./tab/category_black.svg?url"
import tab_year_black from "./tab/year_black.svg?url"
import tab_about_black from "./tab/about_black.svg?url"

// LOGO
import logo from "./logo/logo.svg?url"

// OTHERS
// EOF
import EOF from "./icons/EOF.svg?url"
import EOF_dark from "./icons/EOF_dark.svg?url"
import content from "./icons/content.svg?url"
import content_white from "./icons/content_white.svg?url"
import clipboard from "./icons/clipboard.svg?url"

export default {
    // LOGO
    logo_icons: {
        logo: logo,
    },
    // EOF
    EOF: EOF,
    EOFDark: EOF_dark,
    // CONTENT
    content: content,
    content_white: content_white,
    clipboard: clipboard,

    key_bg: {
        left: bg_left,
        right: bg_right,
        bg_space: bg_space,
    },
    key_function: {
        bb9900: {
            back: function_9900_back,
            hang_up: function_9900_hang_up,
            blackberry: function_9900_blackberry,
            call: function_9900_call,
        },
        bbq20: {
            back: function_q20_back,
            hang_up: function_q20_hang_up,
            blackberry: function_q20_blackberry,
            call: function_q20_call,
        }
    },
    key_normal: {
        backspace: normal_backspace,
        alt: normal_alt,
        enter: normal_enter,
    },

    key_bottom: {
        shift: bottom_shift,
        space: bottom_space,
        sym: bottom_sym,
    },

    tab_icons: {
        invitation: tab_invitation,
        add: tab_add,
        back: tab_back,
        close: tab_close,
        delete: tab_delete,
        done: tab_done,
        doneSaved: tab_done_saved,
        doneChanged: tab_done_changed,
        edit: tab_edit,
        menu: tab_menu,
        recover: tab_recover,
        search: tab_search,
        bill: tab_bill,
        billSimple: tab_bill_simple,
        card: tab_card,
        share: tab_share,
        contentHide: tab_eye_close,
        contentShow: tab_eye_open,
        listSimple: tab_list_simple,
        listDetail: tab_list_detail,
        statistics: tab_statistics,
        key: tab_key,
        folder: tab_folder,
        todo: tab_todo,
        todoActive: tab_todo_active,
        others: tab_others,
        category: tab_category,
        year: tab_year,
        about: tab_about,
    },
    tab_icons_black: {
        invitation: tab_invitation_black,
        add: tab_add_black,
        back: tab_back_black,
        close: tab_close_black,
        delete: tab_delete_black,
        done: tab_done_black,
        edit: tab_edit_black,
        menu: tab_menu_black,
        recover: tab_recover_black,
        search: tab_search_black,
        bill: tab_bill_black,
        billSimple: tab_bill_simple_black,
        card: tab_card_black,
        share: tab_share_black,
        contentHide: tab_eye_close_black,
        contentShow: tab_eye_open_black,
        listSimple: tab_list_simple_black,
        listDetail: tab_list_detail_black,
        statistics: tab_statistics_black,
        key: tab_key_black,
        folder: tab_folder_black,
        todo: tab_todo_black,
        todoActive: tab_todo_active_black,
        others: tab_others_black,
        category: tab_category_black,
        year: tab_year_black,
        about: tab_about_black,
    },

}

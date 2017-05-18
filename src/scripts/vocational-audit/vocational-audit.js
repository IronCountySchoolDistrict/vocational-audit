import $ from 'jquery';

export function init() {
    const template = $('#vocational-audit-template').html();
    const insertSelector = $('#nav-main-frame').find('ul').last();
    insertSelector.append(template);
}
this["JST"] = this["JST"] || {};

this["JST"]["app/templates/information.us"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<span>Information on topic: ' +
((__t = ( topicLabel )) == null ? '' : __t) +
'</span>\n<br/>\n<br/>\n<span>Total Mentions: </span><span class="badge">' +
((__t = ( totalMentions )) == null ? '' : __t) +
'</span>\n<br/>\n<br/>\n<span>Positive Mentions: </span><span class="badge green">' +
((__t = ( positiveMentions )) == null ? '' : __t) +
'</span>\n<br/>\n<span>Neutral Mentions: </span><span class="badge">' +
((__t = ( neutralMentions )) == null ? '' : __t) +
'</span>\n<br/>\n<span>Negative Mentions: </span><span class="badge red">' +
((__t = ( negativeMentions )) == null ? '' : __t) +
'</span>';

}
return __p
};

this["JST"]["app/templates/word.us"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<label class="word" data-id="' +
((__t = ( id )) == null ? '' : __t) +
'" style="font-size: ' +
((__t = ( size )) == null ? '' : __t) +
'; color: ' +
((__t = ( color )) == null ? '' : __t) +
'">' +
((__t = ( value )) == null ? '' : __t) +
'</label>';

}
return __p
};
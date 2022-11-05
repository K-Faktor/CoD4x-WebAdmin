const mongoose = require('mongoose');
const BluebirdPromise = require("bluebird");
BluebirdPromise.promisifyAll(require("mongoose"));
const mongoosePaginate = require('mongoose-paginate-v2');
const Schema = mongoose.Schema;

const PlayersdataSchema = new Schema({
    player_name: { type: String, trim: true, default:'cid_0'},
    player_guid: { type: String, unique: true},
    player_steam_id: { type: String},
    player_ip: { type: String},
    player_country: { type: String},
    player_country_short: { type: String},
    player_city:  { type: String},
    player_name_aliases: [{type: String, trim: true}],
    server_id: [{type: Schema.Types.ObjectId, ref: 'Servers'}],
    sshack:  { type: Boolean, default:true},
    player_registered: {type: Number, default: 0},
    player_fov: {type: Number, default: 1},
    player_fps: {type: Number, default: 1},
    player_promod: {type: Number, default: 1},
    player_emblem_color: {type: Number, default: 0},
    player_emblem_text: {type: String, default: "I love CoD4"},
    player_icon: {type: Number, default: 1},
    is_vpn:  { type: Boolean, default:false}
}, { timestamps: true });

PlayersdataSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Playersdata', PlayersdataSchema);

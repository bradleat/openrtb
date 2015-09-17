var RtbObject = require('../rtbObject');
var PublisherBuilder = require('./publisher').builder;

var Site = function(ref, cat, id, name, publisher){
  this.ref = ref;
  this.cat = cat;  
  this.id = id;  
  this.name = name;  
  this.publisher = publisher;
};

Site.prototype = Object.create(RtbObject.prototype);

var SiteBuilder = function(){};

SiteBuilder.prototype.ref = function(ref){
  this._ref = ref;
  return this;
};

SiteBuilder.prototype.cat = function(cat){
  this._cat = cat;
  return this;
};

SiteBuilder.prototype.id = function(id){
  this._id = id;
  return this;
};

SiteBuilder.prototype.name = function(name){
  this._name = name;
  return this;
};

SiteBuilder.prototype.publisher = function(publisher){
  var builder = new PublisherBuilder();
  this._publisher = builder
                    .id(publisher.id)
                    .name(publisher.name)
                    .build();
  return this;
};

SiteBuilder.prototype.build = function() {
  return new Site(this._ref, this._cat, this._id, this._name, this._publisher).removeUndefined();
};

module.exports = {
  object: Site,
  builder: SiteBuilder  
};
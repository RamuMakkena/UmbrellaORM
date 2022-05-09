// import models
const Category = require('./Category');
const Product = require('./Product');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Categories have many Products
Category.hasMany(Product, {foreignKey: 'category_id'});


// Products belongsTo Category
Product.belongsTo(Category, {foreignKey: 'category_id'});


// Products belongToMany Tags (through ProductTag)

Product.belongsToMany(Tag, {through: ProductTag,
  as : 'product_tags',
foriegnKey: 'tag_id'} );

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {through: ProductTag,
as: 'tagged_products',
foreignKey: 'product_id'});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

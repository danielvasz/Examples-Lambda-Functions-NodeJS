const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const CLIENT = sequelize.define('client', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    }
},{
    freezeTableName: true,
    tableName: 'client',
    timestamps: false
});

const ADDITIONAL = sequelize.define('additional', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.DECIMAL
    }
},{
    freezeTableName: true,
    tableName: 'additional',
    timestamps: false
});

const SIZE = sequelize.define('size', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.DECIMAL
    }
},{
    freezeTableName: true,
    tableName: 'size',
    timestamps: false
});

const DRINK = sequelize.define('drink', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    type: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.DECIMAL
    }
},{
    freezeTableName: true,
    tableName: 'drink',
    timestamps: false
});

const INGREDIENT = sequelize.define('ingredient', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.DECIMAL
    }
},{
    freezeTableName: true,
    tableName: 'ingredient',
    timestamps: false
});

const PIZZA = sequelize.define('pizza', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.DECIMAL
    },
    size_id: {
        type: DataTypes.INTEGER,
        references: {
            model: SIZE,
            key: 'id'
        }
    },
    ingredient_id: {
        type: DataTypes.INTEGER,
        references: {
            model: INGREDIENT,
            key: 'id'
        }
    }
},{
    freezeTableName: true,
    tableName: 'pizza',
    timestamps: false
});

const COMBO = sequelize.define('combo', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.DECIMAL
    },
    pizza_id: {
        type: DataTypes.INTEGER,
        references: {
            model: PIZZA,
            key: 'id'
        }
    },
    drink_id: {
        type: DataTypes.INTEGER,
        references: {
            model: DRINK,
            key: 'id'
        }
    },
    additional_id: {
        type: DataTypes.INTEGER,
        references: {
            model: ADDITIONAL,
            key: 'id'
        }
    }
},{
    freezeTableName: true,
    tableName: 'combo',
    timestamps: false
});

const ORDEN = sequelize.define('orden', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    order_date: {
        type: DataTypes.DATE
    },
    combo_id: {
        type: DataTypes.INTEGER,
        references: {
            model: COMBO,
            key: 'id'
        }
    },
    client_id: {
        type: DataTypes.INTEGER,
        references: {
            model: CLIENT,
            key: 'id'
        }
    }
},{
    freezeTableName: true,
    tableName: 'orden',
    timestamps: false
});

module.exports = {
    CLIENT,
    ADDITIONAL,
    SIZE,
    DRINK,
    INGREDIENT,
    PIZZA,
    COMBO,
    ORDEN
};
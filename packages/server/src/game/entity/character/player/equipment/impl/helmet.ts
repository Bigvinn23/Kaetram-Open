import Equipment from '../equipment';

import { Modules } from '@kaetram/common/network';

import type { Enchantments } from '@kaetram/common/types/item';

export default class Helmet extends Equipment {
    public constructor(key = '', count = -1, enchantments: Enchantments = {}) {
        super(Modules.Equipment.Helmet, key, count, enchantments);
    }
}

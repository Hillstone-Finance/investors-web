/* 
 * Copyright Hillstone Finance - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Jasper Lee <dev@hillstone.finance>, July 2021
 */

const depositTabs = ["Browse All", "My Deposits"];

export default class Navigator {
    constructor(currentDepositTab) {
        this.currentDepositTab = currentDepositTab;
    }

    changeDepositTab(expectedDepositTab) {
        this.currentDepositTab = expectedDepositTab;
    }
}
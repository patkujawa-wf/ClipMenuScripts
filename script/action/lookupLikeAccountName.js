return 'SELECT * FROM [workiva-analytics-lookup:accounts_prod.account_lookup] where UPPER(account_name) like "%' + clipText.trim().toUpperCase() + '%"'
var conf = {
    url: "https://streamdata.motwin.net/https://blockchain.info/ticker?X-Sd-Token=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    graphDefinition: 'graph LR\nath((Athens))-- airplane -->chq;\nchq((Chania))-- airplane -->ath\nath-- airplane -->her;\nher((Heraklion))-- airplane -->ath\nher-. national road .->rth\nchq-. national road .->rth\nrth((Rethymnon))-. national road .->her\nrth-. national road .->chq\nclick ath myActionATH "ATH"\nclick chq myActionCHQ\nclick her myActionHER\nclick rth myActionRETH;'
}
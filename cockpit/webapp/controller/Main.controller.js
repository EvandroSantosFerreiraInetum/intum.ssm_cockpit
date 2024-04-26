sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("inetum.ssm.cockpit.controller.Main", {
            onInit: function () {

            },

            // Função chamada quando um item da GridListItem é pressionado
            onGridListItemPress: function (oEvent) {
                // Obtém o item que foi pressionado
                var oItem = oEvent.getSource();

                // Obtém o link associado ao item clicado
                var sLink = oItem.getBindingContext().getProperty("Link");

                // Verifica se o link está definido
                if (sLink) {
                    // Se o link estiver definido, navega para ele
                    sap.m.URLHelper.redirect(sLink, true); // Abre o link no navegador
                }
                // Se o link não estiver definido, não faz nada
            },
                    
        });
    });

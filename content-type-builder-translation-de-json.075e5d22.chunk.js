"use strict";(self.webpackChunkokadashboard=self.webpackChunkokadashboard||[]).push([[7155],{55177:e=>{e.exports=JSON.parse('{"attribute.boolean":"Boolean","attribute.boolean.description":"Ja oder nein, 1 oder 0, wahr oder falsch","attribute.component":"Komponente","attribute.component.description":"Gruppierung an Feldern, die wiederholt und wiederbenutzt werden kann","attribute.date":"Datum","attribute.date.description":"Eine Datums-Auswahl mit Stunden, Minuten und Sekunden","attribute.datetime":"Datum mit Uhrzeit","attribute.dynamiczone":"Dynamische Zone","attribute.dynamiczone.description":"Beliebige Komponenten beim Bearbeiten des Inhalts w\xe4hlen","attribute.email":"E-Mail","attribute.email.description":"E-Mail-Feld mit Validierung","attribute.enumeration":"Enumeration","attribute.enumeration.description":"Aufz\xe4hlung an Auswahlm\xf6glichkeiten, von denen eine gew\xe4hlt werden muss","attribute.json":"JSON","attribute.json.description":"Daten im JSON-Format","attribute.media":"Medien","attribute.media.description":"Dateien wie Bilder, Videos, etc","attribute.null":" ","attribute.number":"Zahl","attribute.number.description":"Zahlen (ganzzahlig, Gleitkommazahl, dezimal)","attribute.password":"Passwort","attribute.password.description":"Passwort-Feld mit Verschl\xfcsselung","attribute.relation":"Beziehung","attribute.relation.description":"Beziehung mit einem anderen Eintrag","attribute.richtext":"Formatierter Text","attribute.richtext.description":"Ein Text-Editor mit Formatierungsoptionen","attribute.text":"Text","attribute.text.description":"Ein- oder mehrzeiliger Text wie Titel oder Beschreibungen","attribute.time":"Uhrzeit","attribute.timestamp":"Zeitstempel","attribute.uid":"UID","attribute.uid.description":"Einzigartiger Identifier","button.attributes.add.another":"Weiteres Feld hinzuf\xfcgen","button.component.add":"Komponente hinzuf\xfcgen","button.component.create":"Neue Komponente erstellen","button.model.create":"Neue Sammlung erstellen","button.single-types.create":"Neuen Einzel-Eintrag erstellen","component.repeatable":"(wiederholbar)","components.componentSelect.no-component-available":"Du hast bereits alle Komponenten hinzugef\xfcgt","components.componentSelect.no-component-available.with-search":"Es gibt keine Komponenten, die diesem Begriff entsprechen","components.componentSelect.value-component":"{number} Komponente ausgew\xe4hlt (Tippen um nach Komponente zu suchen)","components.componentSelect.value-components":"{number} Komponenten ausgew\xe4hlt","configurations":"Konfigurationen","contentType.collectionName.description":"N\xfctzlich wenn sich der Name der Sammlung und der Tabellenname unterscheiden","contentType.collectionName.label":"Name der Sammlung","contentType.displayName.label":"Anzeigename","contentType.draftAndPublish.description":"Lege einen Entwurf des Eintrags an bevor er ver\xf6ffentlicht wird","contentType.draftAndPublish.label":"Entwurf/Ver\xf6ffentlichen-System","contentType.kind.change.warning":"Du hast die Art eines Inhaltstyps ge\xe4ndert: API wird resettet (Routen, Controller und Services werden \xfcberschrieben).","error.attributeName.reserved-name":"Dieser Name kann nicht f\xfcr Attribute genutzt werden, da er andere Funktionalit\xe4ten beeintr\xe4chtigen w\xfcrde","error.contentTypeName.reserved-name":"Dieser Name kann nicht genutzt werden, da er andere Funktionalit\xe4ten beeintr\xe4chtigen w\xfcrde","error.validation.enum-duplicate":"Doppelte Werte sind nicht erlaubt","error.validation.minSupMax":"Wert kann nicht h\xf6her sein","error.validation.regex":"Regex-Pattern ist ung\xfcltig","error.validation.relation.targetAttribute-taken":"Dieser Name existiert bereits im Ziel-Typ","form.attribute.component.option.add":"Komponente hinzuf\xfcgen","form.attribute.component.option.create":"Neue Komponente erstellen","form.attribute.component.option.create.description":"Eine Komponente ist \xfcberall verf\xfcgbar und wird unter Inhaltstypen und anderen Komponenten geteilt.","form.attribute.component.option.repeatable":"Wiederholbare Komponenten","form.attribute.component.option.repeatable.description":"N\xfctzlich f\xfcr mehrere Instanzen (Array) an Zutaten, Meta-Tags, etc...","form.attribute.component.option.reuse-existing":"Bereits existierende Komponente nutzen","form.attribute.component.option.reuse-existing.description":"Eine bereits erstellte Komponente benutzen, um Daten \xfcber Inhaltstypen hinweg konsistent zu halten.","form.attribute.component.option.single":"Einzelne Komponente","form.attribute.component.option.single.description":"N\xfctzlich um Felder wie volle Addresse, Hauptinformationen, etc. zu grupppieren","form.attribute.item.customColumnName":"Eigener Spaltenname","form.attribute.item.customColumnName.description":"Dies ist n\xfctzlich, um Spalten in der Datenbank f\xfcr Antworten der API umzubenennen","form.attribute.item.defineRelation.fieldName":"Feldname","form.attribute.item.enumeration.graphql":"Namens\xfcberschreibung f\xfcr GraphQL","form.attribute.item.enumeration.graphql.description":"Erm\xf6glicht, den standardm\xe4\xdfig generierten Namen f\xfcr GraphQL zu \xfcberschreiben","form.attribute.item.enumeration.placeholder":"Ex:\\nMorgen\\nMittag\\nAbend","form.attribute.item.enumeration.rules":"Werte (einer pro Zeile)","form.attribute.item.maximum":"Maximalwert","form.attribute.item.maximumLength":"Maximall\xe4nge","form.attribute.item.minimum":"Mindestwert","form.attribute.item.minimumLength":"Mindestl\xe4nge","form.attribute.item.number.type":"Zahlenformat","form.attribute.item.number.type.biginteger":"gro\xdfe Ganzzahl (ex: 123456789)","form.attribute.item.number.type.decimal":"dezimal (z.B.: 2.22)","form.attribute.item.number.type.float":"Gleitkommazahl (z.B.: 3.33333333)","form.attribute.item.number.type.integer":"ganzzahlig (z.B.: 10)","form.attribute.item.privateField":"Privates Feld","form.attribute.item.privateField.description":"Dieses Feld wird nicht in API-Abfragen angezeigt","form.attribute.item.requiredField":"Ben\xf6tigtes Feld","form.attribute.item.requiredField.description":"Du wirst keinen Eintrag anlegen k\xf6nnen, wenn dieses Feld leer ist","form.attribute.item.text.regex":"RegExp-Pattern","form.attribute.item.text.regex.description":"Der Text der Regular Expression","form.attribute.item.uniqueField":"Einzigartiges Feld","form.attribute.item.uniqueField.description":"Du wirst keinen Eintrag anlegen k\xf6nnen, wenn es bereits einen Eintrag mit identischem Inhalt gibt","form.attribute.media.allowed-types":"W\xe4hle erlaubte Arten von Medien","form.attribute.media.allowed-types.option-files":"Dateien","form.attribute.media.allowed-types.option-images":"Bilder","form.attribute.media.allowed-types.option-videos":"Videos","form.attribute.media.option.multiple":"Mehrere Medien","form.attribute.media.option.multiple.description":"N\xfctzlich f\xfcr Slider, Galerien oder Downloads von mehreren Dateien","form.attribute.media.option.single":"Einzelne Medien-Datei","form.attribute.media.option.single.description":"N\xfctzlich f\xfcr Profilbilder oder Cover-Bilder","form.attribute.settings.default":"Standardwert","form.attribute.text.option.long-text":"Mehrzeiliger Text","form.attribute.text.option.long-text.description":"N\xfctzlich f\xfcr Beschreibungen, Biographien. Exakte Suche ist deaktiviert","form.attribute.text.option.short-text":"Einzeiliger Text","form.attribute.text.option.short-text.description":"N\xfctzlich f\xfcr Titel, Namen, Links (URL). Erm\xf6glicht exakte Suche.","form.button.add-components-to-dynamiczone":"Komponenten zur Zone hinzuf\xfcgen","form.button.add-field":"Weiteres Feld hinzuf\xfcgen","form.button.add-first-field-to-created-component":"Erstes Feld zur Komponente hinzuf\xfcgen","form.button.add.field.to.collectionType":"Weiteres Feld zur Sammlung hinzuf\xfcgen","form.button.add.field.to.component":"Weiteres Feld zur Komponente hinzuf\xfcgen","form.button.add.field.to.contentType":"Weiteres Feld zum Inhaltstyp hinzuf\xfcgen","form.button.add.field.to.singleType":"Weiteres Feld zum Einzel-Eintrag hinzuf\xfcgen","form.button.cancel":"Abbrechen","form.button.collection-type.description":"N\xfctzlich f\xfcr mehrere Instanzen wie Artikel, Produkte, Kommentare, etc.","form.button.configure-component":"Komponente konfigurieren","form.button.configure-view":"Ansicht konfigurieren","form.button.select-component":"Komponente ausw\xe4hlen","form.button.single-type.description":"N\xfctzlich f\xfcr einzelne Instanz wie \xdcber uns, Startseite, etc.","form.contentType.divider.draft-publish":"ENTWURF/VER\xd6FFENTLICHEN","from":"von","modalForm.attribute.form.base.name.description":"Leerzeichen sind im Name eines Attributs nicht erlaubt","modalForm.attribute.form.base.name.placeholder":"z.B. Slug, SEO URL, Canonical URL","modalForm.attribute.target-field":"Verkn\xfcpftes Feld","modalForm.attributes.select-component":"W\xe4hle eine Komponente","modalForm.attributes.select-components":"W\xe4hle die Komponenten","modalForm.component.header-create":"Erstelle eine Komponente","modalForm.components.create-component.category.label":"W\xe4hle Kategorie oder gebe neuen Namen ein, um eine zu erstellen","modalForm.components.icon.label":"Icon","modalForm.editCategory.base.name.description":"Leerzeichen sind im Name einer Kategorie nicht erlaubt","modalForm.header-edit":"Bearbeite {name}","modalForm.header.categories":"Kategorien","modalForm.singleType.header-create":"Erstelle einen Einzel-Eintrag","modalForm.sub-header.addComponentToDynamicZone":"Komponente zur dynamischen Zone hinzuf\xfcgen","modalForm.sub-header.attribute.create":"Erstelle neues {type}-Feld","modalForm.sub-header.attribute.create.step":"Neue Komponente ({step}/2)","modalForm.sub-header.attribute.edit":"Bearbeite {name}","modalForm.sub-header.chooseAttribute.collectionType":"W\xe4hle ein Feld f\xfcr die Sammlung","modalForm.sub-header.chooseAttribute.component":"W\xe4hle ein Feld f\xfcr die Komponente","modalForm.sub-header.chooseAttribute.singleType":"W\xe4hle ein Feld f\xfcr den Einzel-Eintrag","modelPage.attribute.relation-polymorphic":"Beziehung (polymorph)","modelPage.attribute.relationWith":"Beziehung mit","notification.info.autoreaload-disable":"Das autoReload-Feature wird f\xfcr dieses Plugin ben\xf6tigt. Starte deinen Server mit `strapi develop`","notification.info.creating.notSaved":"Bitte speichere deine Arbeit bevor du einen neuen Inhaltstyp oder eine neue Komponente erstellst","plugin.description.long":"Modelliere die Datenstruktur deiner API. Lege neue Felder und Beziehungen innerhalb von einer Minute an. Erforderliche Dateien werden automatisch in deinem Projekt angelegt und aktualisiert.","plugin.description.short":"Modelliere die Datenstruktur deiner API.","popUpForm.navContainer.advanced":"Fortgeschrittene Einstellungen","popUpForm.navContainer.base":"Grundeinstellungen","popUpWarning.bodyMessage.cancel-modifications":"Bist du dir sicher, dass du alle deine \xc4nderungen abbrechen willst?","popUpWarning.bodyMessage.cancel-modifications.with-components":"Bist du dir sicher, dass du alle deine \xc4nderungen abbrechen willst? Es wurden Komponenten erstellt oder bearbeitet...","popUpWarning.bodyMessage.category.delete":"Bist du dir sicher, dass du diese Kategorie l\xf6schen willst? Alle dazugeh\xf6rigen Komponenten werden ebenfalls gel\xf6scht.","popUpWarning.bodyMessage.component.delete":"Bist du dir sicher, dass du diese Komponente l\xf6schen willst?","popUpWarning.bodyMessage.contentType.delete":"Bist du sicher, dass du diesen Inhaltstyp l\xf6schen willst?","popUpWarning.draft-publish.button.confirm":"Ja, deaktivieren","popUpWarning.draft-publish.message":"Wenn du das Entwurf/Ver\xf6ffentlichen-System deaktivierst werden alle Entw\xfcrfe gel\xf6scht.","popUpWarning.draft-publish.second-message":"Bist du dir sicher, dass du es deaktivieren willst?","prompt.unsaved":"Bist du dir sicher, dass du diese Seite verlassen willst? Deine \xc4nderungen werden verworfen.","relation.attributeName.placeholder":"z.B.: Autor, Kategorie","relation.manyToMany":"hat und geh\xf6rt zu vielen","relation.manyToOne":"hat viele","relation.manyWay":"hat viele","relation.oneToMany":"geh\xf6rt zu vielen","relation.oneToOne":"hat und geh\xf6rt zu ein(-er/-em)","relation.oneWay":"hat ein(-e/-en)"}')}}]);
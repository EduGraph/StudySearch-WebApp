# City based on DBpedia Metadata


```sparql

PREFIX schema: <http://schema.org/>
PREFIX dcterms:<http://purl.org/dc/terms/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX foaf: <http://xmlns.com/foaf/0.1/>

PREFIX dbpedia-de:<http://de.dbpedia.org/resource/>
PREFIX dbpedia-owl: <http://dbpedia.org/ontology/>
PREFIX dbo: <http://dbpedia.org/ontology/>
PREFIX dbr: <http://dbpedia.org/resource/>
PREFIX wd: <http://www.wikidata.org/entity/>
PREFIX wdt: <http://www.wikidata.org/prop/direct/>
PREFIX wikibase: <http://wikiba.se/ontology#>

PREFIX geo:<http://www.w3.org/2003/01/geo/wgs84_pos#>

SELECT *
WHERE
{

    SERVICE <http://de.dbpedia.org/sparql/> {
        dbpedia-de:Brandenburg_an_der_Havel rdfs:label ?label;
        rdfs:comment ?comment;
        dbpedia-owl:abstract ?abstract;
        dbpedia-owl:postalCode ?postCode;
        foaf:homepage ?homepage;
        dbpedia-owl:federalState ?state;
        dbpedia-owl:thumbnail ?thumbnail;
        foaf:depiction ?depiction;
        foaf:isPrimaryTopicOf ?wikipediaPage;
        dbpedia-owl:areaTotal ?areaTotal;
        geo:long ?long;
        geo:lat ?lat.
    }

    SERVICE <http://dbpedia.org/sparql/> {
        dbr:Brandenburg_an_der_Havel dbo:populationTotal ?populationTotal

    }
}

```

## ToDo
* Datenkonvertierung
* Sprache Filterung
# All Universities based on EduGraph

```sparql
PREFIX schema: <http://schema.org/>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX foaf: <http://xmlns.com/foaf/0.1/>
PREFIX bise:  <http://akwi.de/ns/bise#>
PREFIX dbpedia-de: <http://de.dbpedia.org/resource/>
PREFIX dbpedia-owl: <http://dbpedia.org/ontology/>
PREFIX dbo: <http://dbpedia.org/ontology/>
PREFIX dbr: <http://dbpedia.org/resource/>
PREFIX wd: <http://www.wikidata.org/entity/>
PREFIX wdt: <http://www.wikidata.org/prop/direct/>
PREFIX wikibase: <http://wikiba.se/ontology#>
PREFIX geo: <http://www.w3.org/2003/01/geo/wgs84_pos#>

SELECT DISTINCT
    ?universityURI ?universityLabel ?universityHomepage ?universityLatitude ?universityLongitude
    ?universityLocationURI ?universityLocationLabel
    ?degreeProgramURI ?degreeProgramLabel ?degreeProgramHomepage ?degreeProgramCreditPoints ?degreeProgramPeriodOfStudy
    ?degreeProgramBAMPillar ?degreeProgramBISPillar ?degreeProgramCSCPillar ?degreeProgramRankingCHE
    ?degreeProgramJobADM ?degreeProgramJobCON ?degreeProgramJobINF ?degreeProgramJobITM ?degreeProgramJobSWE
WHERE
{
    ?universityURI a schema:CollegeOrUniversity;
        schema:name ?universityLabel_lang;
        schema:url ?universityHomepage;
        schema:location ?universityLocationURI;
        schema:geo ?universityGeoCoordinates.
    ?universityGeoCoordinates schema:latitude ?universityLatitude;
        schema:longitude ?universityLongitude.

    OPTIONAL {
        ?universityURI dbpedia-owl:thumbnail ?universitythumbnail;
    }
    ?degreeProgramURI a bise:BISEBachelor;
        schema:provider ?universityURI;
        bise:bisePillar ?degreeProgramPillars;
        bise:cpECTS ?degreeProgramCreditPoints;
        bise:stPeriodOfStudy ?degreeProgramPeriodOfStudy;
        schema:name ?degreeProgramLabel;
        schema:url ?degreeProgramHomepage.
    ?degreeProgramPillars bise:pillarBAM ?degreeProgramBAMPillar;
        bise:pillarBIS ?degreeProgramBISPillar;
        bise:pillarCSC ?degreeProgramCSCPillar.
    #FILTER (?degreeProgramBAMPillar >= 0.3)
    #FILTER (?degreeProgramBISPillar >= 0.3)
    #FILTER (?degreeProgramCSCPillar >= 0.3)
    BIND((?degreeProgramCSCPillar) AS ?degreeProgramJobADM)
    BIND(((?degreeProgramBAMPillar+?degreeProgramBISPillar)/2) AS ?degreeProgramJobCON)
    BIND((?degreeProgramCSCPillar) AS ?degreeProgramJobINF)
    BIND(((?degreeProgramBAMPillar+?degreeProgramBISPillar)/2) AS ?degreeProgramJobITM)
    BIND((?degreeProgramCSCPillar) AS ?degreeProgramJobSWE)
    #FILTER (?degreeProgramJobADM >= 0.3)
    #FILTER (?degreeProgramJobCON >= 0.3)
    #FILTER (?degreeProgramJobINF >= 0.3)
    #FILTER (?degreeProgramJobITM >= 0.3)
    #FILTER (?degreeProgramJobSWE >= 0.3)

    #FILTER (langMatches(lang(?universityLabel_lang),"de"))
    BIND (str(?universityLabel_lang) AS ?universityLabel)

    ?universityLocationURI schema:name ?universityLocationLabel_lang;

    #FILTER (langMatches(lang(?universityLocationLabel_lang),"de"))
    BIND (str(?universityLocationLabel_lang) AS ?universityLocationLabel)
}
```

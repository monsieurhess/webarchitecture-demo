# Gummersbach Demo Projekt

1. Voraussetzungen
    - [Docker Desktop](https://www.docker.com/products/docker-desktop/)
    - [Java 11](https://www.azul.com/downloads/#downloads-table-zulu) (JDK)
    - [Maven 3](https://dlcdn.apache.org/maven/maven-3/3.8.8/binaries/apache-maven-3.8.8-bin.zip)

2. Apache Sling starten
   Ein frisches Apache Sling lässt sich bequem über Docker starten. Dabei werden alle zum Start von Sling notwendigen Resourcen automatisch aus dem Internet geladen.

```shell
docker run -p 8080:8080 -v /tmp/sling:/opt/sling/sling apache/sling:12
```

Sobald Apache Sling gestartet ist, erreicht man die Apache Felix Webconsole unter http://localhost:8080/system/console/bundles. Bei der Frage nach Benutzername und Passwort ist jeweils `admin` anzugeben.

3. Eigenen Code in Apache Sling
   Das Maven Projekt muss gebaut werden. Hierzu öffnet man eine Kommandozeile (Shell) und wechselt in das Verzeichnis, in dem der Code liegt. Dort gibt man den Befehl `mvn install -PautoInstallBundle` ein.

Wenn das Maven Projekt erfolgreich gebaut wurde, sollte folgender Text sichtbar sein:
```
[INFO] ------------------------------------------------------------------------
[INFO] Reactor Summary for webarchitecture 1-SNAPSHOT:
[INFO] 
[INFO] webarchitecture .................................... SUCCESS [  0.049 s]
[INFO] backend ............................................ SUCCESS [  2.439 s]
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  2.903 s
[INFO] Finished at: 2023-05-08T04:57:54+02:00
[INFO] ------------------------------------------------------------------------
```

Im `backend` Maven Modul wird sowohl Content als auch Code für Apache Sling verpackt. Sobald das `backend` Modul in Apache Sling installiert ist (passiert im Rahmen des Bauens des Projekts) kann die [Demo Seite](http://localhost:8080/content/demo/de.html) erreicht werden.

4. Frontend starten
   Das Frontend lässt sich ebenfalls per Maven starten. Dazu wechselt man in den `frontend` Ordner und gibt den folgenden Befehl in die Kommandozeile ein:
```shell
mvn exec:exec@vite
```

Nach einem kurzen Augenblick sollte folgender Text in der Kommandozeile erscheinen:
```
  VITE v4.3.5  ready in 185 ms

  ➜  Local:   http://localhost:8081/
  ➜  Network: http://192.168.178.175:8081/
  ➜  Network: http://192.168.64.1:8081/
  ➜  Network: http://172.22.3.66:8081/
  ➜  press h to show help
```

Die Demo zeigt:
1. Kontrolle der Seite aus dem Content heraus (Seiten und Komponenten liegen im Content)
2. Java Code wird genutzt, um zusätzliche Logik über den Content zu platzieren
3. Serverseitiges Rendering
4. HATEOAS an Hand einer AJAX Komponente. URL kommt vom Server und wird **nicht** im Client zusammengebaut.
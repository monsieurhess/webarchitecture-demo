package de.cybercon.thkoeln.backend.model;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

/**
 * A model class to provide some backend logic
 */
@Model(adaptables={Resource.class})
public class DemoModel {

    @SlingObject
    private Resource resource;

    public String getMyMessage() {
        return "Es ist " + DateTimeFormatter.ISO_LOCAL_DATE_TIME.format(LocalDateTime.now());
    }
}

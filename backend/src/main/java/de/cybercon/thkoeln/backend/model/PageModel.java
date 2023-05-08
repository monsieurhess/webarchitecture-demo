package de.cybercon.thkoeln.backend.model;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;

import java.util.Collections;

/**
 * A model class to provide some backend logic
 */
@Model(adaptables={Resource.class})
public class PageModel {

    @SlingObject
    Resource resource;

    public Iterable<Resource> getContent() {
        Resource content = resource.getChild("content");
        if (content == null) {
            return Collections.emptyList();
        }
        return content.getChildren();
    }
}

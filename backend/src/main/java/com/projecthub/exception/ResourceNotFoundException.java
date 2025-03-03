// src/main/java/com/projecthub/exception/ResourceNotFoundException.java
package com.projecthub.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException {

    public ResourceNotFoundException(String message) {
        super(message);
    }

    public ResourceNotFoundException(String resourceName, String fieldName, Object fieldValue) {
        super(String.format("%s が見つかりません。 %s: '%s'", resourceName, fieldName, fieldValue));
    }
}
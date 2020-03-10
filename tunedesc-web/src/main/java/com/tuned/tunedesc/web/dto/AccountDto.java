package com.tuned.tunedesc.web.dto;

public class AccountDto {

    private boolean activated;

    private String activateMessage;

    public boolean isActivated() {
        return activated;
    }

    public void setActivated(boolean activated) {
        this.activated = activated;
    }

    public String getActivateMessage() {
        return activateMessage;
    }

    public void setActivateMessage(String sctivateMessage) {
        this.activateMessage = sctivateMessage;
    }
}

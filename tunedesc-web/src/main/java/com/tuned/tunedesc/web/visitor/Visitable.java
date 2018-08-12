package com.tuned.tunedesc.web.visitor;

import com.tuned.tunedesc.web.visitor.BaseVisitor;

public interface Visitable {


    public void accept(BaseVisitor visitor);

    public Object getVisitor();


}
